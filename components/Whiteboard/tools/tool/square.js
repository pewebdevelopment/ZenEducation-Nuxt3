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
  local.path = new paper.Shape.Rectangle(local.center, event.point);
  local.path.strokeColor = whiteboardStore.shapeArgs.color;
  local.path.strokeWidth = whiteboardStore.shapeArgs.size;
}

function onMouseUp(event) {
  local.layer.addChild(local.path);
  const action = new DrawAction({
    layer: local.path.layer.name,
    tool: whiteboardStore.tool,
    from: { x: local.center.x, y: local.center.y },
    to: { x: event.point.x, y: event.point.y },
  });
  local.path = null;
  history.add(action);
}

export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;
