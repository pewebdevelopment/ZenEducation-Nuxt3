import paper from "paper";
import { createLayer } from "./shared";

export class DrawAction {
  constructor(args) {
    this._args = args;
  }
  exec() {
    console.log("Inside Exec Function");
    if (!paper.project.layers[this._args.layer]) {
      console.log("Trying to create Layers");
      createLayer(this._args.layer);
    }
    if (this.removed) {
      return paper.project.layers[this._args.layer].addChildren(this.removed);
    }
  }
  unexec() {
    this.removed = paper.project.layers[this._args.layer].removeChildren();
  }
}
