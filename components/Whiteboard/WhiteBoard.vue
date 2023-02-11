<template>
  <div>
    <canvas id="canvas-id" resize class="mb-10"></canvas>
    <!-- <canvas id="canvas-fabric" ref="fabricJS" class=""></canvas> -->
    <div id="panels-container" class="flex flex-col gap-5">
      <mainPanel /> <historyPanel />
    </div>
  </div>
</template>

<script>
import paper from "paper";
// import { fabric } from "fabric";
import MainPanel from "./panel/MainPanel";
import HistoryPanel from "./panel/HistoryPanel";

export default {
  components: {
    mainPanel: MainPanel,
    historyPanel: HistoryPanel,
  },
  created() {},

  mounted() {
    const runtimeConfig = useRuntimeConfig();
    console.log("RunTimeConfig:", runtimeConfig.isClient);

    if (runtimeConfig.isClient) {
      paper.setup(document.getElementById("canvas-id"));

      //   const ref = this.$refs.fabricJS;
      //   const canvas = new fabric.Canvas(ref);

      //   console.log("Ref", ref);
      //   console.log("Fabric canvas", canvas);
      //   const rect = new fabric.Circle({
      //     fill: "#0000FF",
      //     radius: 100,
      //     stroke: "#0000FF",
      //     strokeWidth: 5,
      //     // width: 200,
      //     // height: 200,
      //   });
      //   canvas.add(rect);
    }
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
canvas {
  height: 100vh;
  width: 100vw;
  background: #04010c;
}
/* 
#canvas-fabric {
  height: 1000px;
  width: 1000px;
  background: #cb0c0c;
} */
</style>
