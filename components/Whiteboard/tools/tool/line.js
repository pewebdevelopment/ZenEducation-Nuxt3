import paper from "paper";

import { createLayer } from "../shared";
import history from "../history";
import { DrawAction } from "../action";
import { useWhiteboardStore } from "@/stores/whiteboard";

const whiteboardStore = useWhiteboardStore();

let local = {
  path: null,
};

function onMouseDrag(event) {
  if (local.path) {
    local.path.remove();
  }
  local.path = new paper.Path.Line({
    from: event.downPoint,
    to: event.point,
    strokeColor: whiteboardStore.shapeArgs.color,
  });
  local.path.strokeColor = whiteboardStore.shapeArgs.color;
  local.path.strokeWidth = whiteboardStore.shapeArgs.size;
}

function onMouseUp() {
  let layer = createLayer();
  layer.addChild(local.path);

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
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;
