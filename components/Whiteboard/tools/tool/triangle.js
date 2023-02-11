import paper from "paper";

import history from "../history";
import { createLayer } from "../shared";
import { DrawAction } from "../action";
import { useWhiteboardStore } from "@/stores/whiteboard";

const whiteboardStore = useWhiteboardStore();

let local = {
  path: null,
  center: null,
  layer: null,
};

function onMouseDown(event) {
  local.layer = createLayer();
  local.center = event.point;
}

function onMouseDrag(event) {
  if (local.path) {
    local.path.remove();
  }
  local.path = new paper.Path.RegularPolygon(
    local.center,
    3,
    Math.sqrt(
      (event.point.x - local.center.x) * (event.point.x - local.center.x) +
        (event.point.y - local.center.y) * (event.point.y - local.center.y)
    )
  );
  local.path.strokeColor = whiteboardStore.shapeArgs.color;
  local.path.strokeWidth = whiteboardStore.shapeArgs.size;
}

function onMouseUp() {
  local.layer.addChild(local.path);
  const action = new DrawAction({
    layer: local.path.layer.name,
    tool: whiteboardStore.tool,
    points: local.path.segments.map((seg) => {
      return {
        x: seg._point._x,
        y: seg._point._y,
      };
    }),
  });
  history.add(action);
  local.path = null;
}

export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;
