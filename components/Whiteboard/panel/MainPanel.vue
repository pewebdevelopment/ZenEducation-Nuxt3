<template>
  <div class="mainPanel">
    <!-- Actions panel -->
    <div class="actionsPanel">
      <!-- Pencil -->
      <panelToolIcon
        @click.native="
          togglePencilSettings();
          setWhiteboardTool('pencil');
        "
        :toolColor="getPencilColor"
        :isActive="tool === 'pencil'"
        icon="pencil-alt"
      />
      <!-- Pencil settings -->
      <panelToolSettings v-if="isPencilSettingsOpened">
        <template #settingsColorPicker>
          <!-- ColorPicker -->
          <colorPicker
            :onSelectColor="setPencilColor"
            class="settingsColorPicker"
            :vividColors="vividColors"
            :darkColors="darkColors"
          />
        </template>

        <!-- Slider -->
        <rangeSlider
          :onChange="setToolSize"
          :min="0"
          :max="6"
          :value="toolSize"
          class="settingsSlider"
          slot="slider"
        />
      </panelToolSettings>

      <!-- Brush -->
      <panelToolIcon
        @click.native="
          toggleBrushSettings();
          setWhiteboardTool('brush');
        "
        :toolColor="brushColor"
        :isActive="tool === 'brush'"
        icon="paint-brush"
      />
      <!-- Brush settings -->
      <panelToolSettings v-if="isBrushSettingsOpened">
        <template #settingsColorPicker>
          <!-- ColorPicker -->
          <colorPicker
            :onSelectColor="setBrushColor"
            class="settingsColorPicker"
            :vividColors="vividColors"
            :darkColors="darkColors"
          />
        </template>

        <!-- Slider -->
        <rangeSlider
          :onChange="setToolSize"
          :min="0"
          :max="6"
          :value="toolSize"
          class="settingsSlider"
          slot="slider"
        />
      </panelToolSettings>

      <!-- Eraser  -->
      <panelToolIcon
        @click.native="
          toggleEraserSettings();
          setWhiteboardTool('eraser');
        "
        toolColor="#133337"
        :isActive="tool === 'eraser'"
        icon="eraser"
      />
      <!-- Eraser settings -->
      <panelToolSettings v-if="isEraserSettingsOpened">
        <!-- Slider -->
        <rangeSlider
          :onChange="setEraserSize"
          :min="0"
          :max="24"
          :value="eraserSize"
          class="settingsSlider"
          slot="slider"
        />
      </panelToolSettings>

      <!-- Shape Select -->
      <panelToolIcon
        @click.native="toggleShapeSettings"
        :toolColor="shapeColor"
        :isActive="
          tool === 'circle' ||
          tool === 'square' ||
          tool === 'triangle' ||
          tool === 'line'
        "
        :icon="activeShape"
      />
      <!-- Shape settings -->
      <panelToolSettings v-if="isShapeSettingsOpened">
        <!-- SettingsActions -->
        <template class="settingsActions" #settingsActions>
          <!-- Circle select -->
          <panelToolIcon
            @click.native="setWhiteboardTool('circle')"
            :toolColor="shapeColor"
            :isActive="tool === 'circle'"
            icon="circle"
          />
          <!-- Square select -->
          <panelToolIcon
            @click.native="setWhiteboardTool('square')"
            :toolColor="shapeColor"
            :isActive="tool === 'square'"
            icon="square"
          />
          <!-- Triangle select -->
          <panelToolIcon
            @click.native="setWhiteboardTool('triangle')"
            :toolColor="shapeColor"
            :isActive="tool === 'triangle'"
            icon="exclamation-triangle"
          />
          <!-- Line select -->
          <panelToolIcon
            @click.native="setWhiteboardTool('line')"
            :toolColor="shapeColor"
            :isActive="tool === 'line'"
            icon="slash"
          />
        </template>

        <template #settingsColorPicker>
          <!-- ColorPicker -->
          <colorPicker
            :onSelectColor="setShapeColor"
            class="settingsColorPicker"
            :vividColors="vividColors"
            :darkColors="darkColors"
          />
        </template>

        <template #slider>
          <!-- Slider -->
          <rangeSlider
            :onChange="setShapeSize"
            :min="0"
            :max="6"
            :value="shapeSize"
            class="settingsSlider"
          />
        </template>
      </panelToolSettings>
    </div>
  </div>
</template>

<script>
// import { mapState } from "pinia";
import Tools from "@/components/Whiteboard/tools/tool/tools";
import { useWhiteboardStore } from "@/stores/whiteboard";
import PanelToolIcon from "./PanelToolIcon";
import PanelToolSettings from "./PanelToolSettings";
import ColorPicker from "../ColorPicker";
// import RangeSlider from "../RangeSlider";
// const whiteboardStore = useWhiteboardStore(); // this is for the composition API

const vividColours = [
  "#FFFFFF", //White
  "#FF0000", // Red
  "#EC008C", // Pink
  "#AB47BC", // Violet
  "#7841CC", // Purple
  "#1976D2", // Blue
  "#42A5F5", // LightBlue2
  "#00C6C2", // Teal
  "#39B54A", // Green
  "#FFEB3B", // Yellow
  "#FB8C00", // Orange
  "#8D6E63", // LightBrown
  "#607D8B", //Slate
  "#263238", // DarkSlate
];

const darkColours = [
  "#B0BEC5", // DarkWhite
  "#B71C1C", // DarkRed
  "#AD1457", // DarkPink
  "#7B1FA2", // DarkVoilet
  "#512DA8", // DarkPurple
  "#0D47A1", // DarkBlue
  "#0097A7", // DarkTeal
  "#00796B", // DarkGreen
  "#004D40", // DarkGreen
  "#FBC02D", // DarkYellowMango
  "#E65100", // DarkOrange
  "#3E2723", // DarkBrown
  "#424242", // DarkGray [Replace]
  "#000000", // DarkBlack
];

export default {
  components: {
    panelToolIcon: PanelToolIcon,
    panelToolSettings: PanelToolSettings,
    // rangeSlider: RangeSlider,
    colorPicker: ColorPicker,
  },
  data() {
    return {
      whiteboardStore: useWhiteboardStore(this.$pinia),

      isPencilSettingsOpened: false,
      isBrushSettingsOpened: false,
      isEraserSettingsOpened: false,
      isShapeSettingsOpened: false,
      vividColors: vividColours,
      darkColors: darkColours,
    };
  },
  methods: {
    // Toggle
    // toggleToolSettings() {
    //   this.isToolSettingsOpened = !this.isToolSettingsOpened;
    //   this.isEraserSettingsOpened = false;
    //   this.isShapeSettingsOpened = false;
    // },

    togglePencilSettings() {
      this.isPencilSettingsOpened = !this.isPencilSettingsOpened;
      this.isBrushSettingsOpened = false;
      // this.isToolSettingsOpened = !this.isToolSettingsOpened;
      this.isEraserSettingsOpened = false;
      this.isShapeSettingsOpened = false;
    },

    toggleBrushSettings() {
      this.isBrushSettingsOpened = !this.isBrushSettingsOpened;
      this.isPencilSettingsOpened = false;
      // this.isToolSettingsOpened = !this.isToolSettingsOpened;
      this.isEraserSettingsOpened = false;
      this.isShapeSettingsOpened = false;
    },
    toggleEraserSettings() {
      this.isEraserSettingsOpened = !this.isEraserSettingsOpened;
      this.isBrushSettingsOpened = false;
      this.isPencilSettingsOpened = false;

      this.isShapeSettingsOpened = false;
    },
    toggleShapeSettings() {
      this.isShapeSettingsOpened = !this.isShapeSettingsOpened;
      this.isBrushSettingsOpened = false;
      this.isPencilSettingsOpened = false;
      this.isEraserSettingsOpened = false;
    },
    // Set Color
    // setToolColor(color) {
    //   console.log("Inside SetTool Color");
    //   this.whiteboardStore.setToolColor(color);
    //   // this.$store.dispatch("setToolColor", color);
    // },

    setPencilColor(color) {
      console.log("Inside Set Pencil Color");
      this.whiteboardStore.setPencilColor(color);
      // this.$store.dispatch("setToolColor", color);
    },

    setBrushColor(color) {
      console.log("Inside Set Brush Color");
      this.whiteboardStore.setBrushColor(color);
      // this.$store.dispatch("setToolColor", color);
    },

    setShapeColor(color) {
      this.whiteboardStore.setShapeColor(color);
      // this.$store.dispatch("setShapeColor", color);
    },
    // Set size
    setToolSize(size) {
      this.whiteboardStore.setToolSize(size);
      // this.$store.dispatch("setToolSize", size);
    },
    setEraserSize(size) {
      this.whiteboardStore.setEraserSize(size);
      // this.$store.dispatch("setEraserSize", size);
    },
    setShapeSize(size) {
      this.whiteboardStore.setShapeSize(size);
      // this.$store.dispatch("setShapeSize", size);
    },
    // Set tool
    setWhiteboardTool(tool) {
      this.whiteboardStore.setWhiteboardTool(tool);
      // this.$store.dispatch("setWhiteboardTool", tool);
    },
  },
  computed: {
    // Mapping the store via MapStore from Pinia

    // ...mapState(useWhiteboardStore(), ["whiteboardStore"]),

    // Acitve
    activeTool: function () {
      if (this.tool === "pencil") {
        return "pencil-alt";
      } else if (this.tool === "brush") {
        return "paint-brush";
      } else {
        return "pencil-alt";
      }
    },
    activeShape: function () {
      if (this.tool === "cricle") {
        return "circle";
      } else if (this.tool === "square") {
        return "square";
      } else if (this.tool === "triangle") {
        return "exclamation-triangle";
      } else if (this.tool === "line") {
        return "slash";
      } else {
        return "circle";
      }
    },

    tool: function () {
      // return "pencil";
      return this.whiteboardStore.tool;
    },
    // Color
    toolColor: function () {
      // debugger;
      // console.log(this.whiteboardStore);
      return this.whiteboardStore.toolArgs.color;
    },

    // Size
    toolSize: function () {
      return this.whiteboardStore.toolArgs.size;
    },
    // Color
    getPencilColor: function () {
      // debugger;
      // console.log(this.whiteboardStore);
      // return "blue";
      console.log("Pencil Color:", this.whiteboardStore.pencilArgs.color);
      return this.whiteboardStore.pencilArgs.color;
    },

    // Size
    pencilSize: function () {
      return this.whiteboardStore.pencilArgs.size;
    },

    brushColor: function () {
      // debugger;
      // console.log(this.whiteboardStore);
      return this.whiteboardStore.brushArgs.color;
    },

    // Size
    brushSize: function () {
      return this.whiteboardStore.brushArgs.size;
    },

    eraserSize: function () {
      return this.whiteboardStore.eraserArgs.size;
    },
    shapeColor: function () {
      console.log("ShapeColour:", this.whiteboardStore.shapeArgs.color);
      return this.whiteboardStore.shapeArgs.color;
    },
    shapeSize: function () {
      return this.whiteboardStore.shapeArgs.size;
    },
  },
  mounted() {
    // console.log(Tools.pencil);
    this.whiteboardStore.setWhiteboardTool();
    // this.whiteboardStore.setWhiteboardTool(Tools.pencil);
    console.log(this.whiteboardStore);
    this.setToolSize(3); // This is working to set the ToolSize
  },
};
</script>

<style>
.mainPanel {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 10px;
  left: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 10px 30px 8px rgba(0, 0, 0, 0.4);
}

.mainPanel .actionsPanel .tool:not(:last-child) {
  margin-bottom: 5px;
}
</style>
