import paper from "paper";
import history from "../history";
import { createLayer } from "../shared";
import { DrawAction } from "../action";
import { useWhiteboardStore } from "@/stores/whiteboard";

console.log(paper);

const whiteboardStore = useWhiteboardStore();

let local = {
  path: null,
  group: null,
};

function onMouseDown(event) {
  console.log("Inside onMouseDown");
  // const whiteboardStore = useWhiteboardStore();

  let layer = createLayer();
  local.path = new paper.Path();

  local.path.strokeColor = whiteboardStore.pencilArgs.color;
  local.path.strokeWidth = whiteboardStore.pencilArgs.size;
  local.path.add(event.point);
  // console.log("Before Local Group:", local.group);
  local.group = new paper.Group({
    children: [local.path],
    // layer: layer.name,
  });
  // console.log("After Local Group:", local.group);
  local.group.addChild(
    new paper.Shape.Ellipse({
      // layer: layer,
      center: event.point,
      // strokeColor: whiteboardStore.pencilArgs.color,
      fillColor: whiteboardStore.pencilArgs.color,
      radius: whiteboardStore.pencilArgs.size / 2,
    })
  );
  layer.addChild(local.group);
}

function onMouseDrag(event) {
  console.log("Inside onMouseDrag");

  if (!local.path) return;
  local.path.add(event.point);
  // local.path.selected = true; // This removes the hilighting of the points as we are dwaring the path
}

function onMouseUp(event) {
  console.log("Inside onMouseUp");
  const whiteboardStore = useWhiteboardStore();

  local.path.add(event.point);
  local.path.simplify();
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

  local.path.selected = false;
  local.path = null;
  local.group = null;
}

export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;
