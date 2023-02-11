import paper from "paper";

import { createLayer } from "../shared";
import history from "../history";
import { DrawAction } from "../action";
import { useWhiteboardStore } from "@/stores/whiteboard";

const whiteboardStore = useWhiteboardStore();

let local = {
  path: null,
  group: null,
};

function onMouseDown(event) {
  let layer = createLayer();

  local.path = new paper.Path();
  local.path.strokeColor = whiteboardStore.eraserArgs.color;
  local.path.strokeWidth = whiteboardStore.eraserArgs.size;

  local.path.add(event.point);

  local.group = new paper.Group({
    children: [local.path],
    // layer: layer,
  });
  local.group.addChild(
    new paper.Shape.Ellipse({
      // layer: layer,
      center: event.point,
      fillColor: whiteboardStore.eraserArgs.color,
      radius: whiteboardStore.eraserArgs.size / 2,
    })
  );
  layer.addChild(local.group);
}

function onMouseDrag(event) {
  if (!local.path) return;
  local.path.add(event.point);
}

function onMouseUp(event) {
  local.path.add(event.point);
  local.path.simplify();
  const action = new DrawAction({
    layer: local.path.layer.name,
    tool: {
      color: whiteboardStore.tool.color,
      size: whiteboardStore.tool.size,
    },
    points: local.path.segments.map((seg) => {
      return {
        x: seg._point._x,
        y: seg._point._y,
      };
    }),
  });
  local.path = null;
  local.group = null;
  history.add(action);
}

export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;
