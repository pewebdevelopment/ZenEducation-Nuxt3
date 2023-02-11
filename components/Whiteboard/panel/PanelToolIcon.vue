<template>
  <div :class="{ active: isActive }" class="tool">
    <font-awesome-icon :color="toolColor" :icon="icon" />
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPencilAlt,
  faUndo,
  faRedo,
  faEraser,
  faCircle,
  faFont,
  faUpload,
  faPaintBrush,
  faSquare,
  faExclamationTriangle,
  faSlash,
} from "@fortawesome/free-solid-svg-icons";

library.add({
  faPencilAlt,
  faUndo,
  faRedo,
  faEraser,
  faCircle,
  faFont,
  faUpload,
  faPaintBrush,
  faSquare,
  faExclamationTriangle,
  faSlash,
});

export default {
  props: ["icon", "toolColor", "isActive"],
  components: {
    "font-awesome-icon": FontAwesomeIcon,
  },
};
</script>

<style scoped>
.tool {
  padding: 10px;
  cursor: pointer;
}
.tool:not(.active):hover {
  background: #e6e9f0;
  border-radius: 5px;
}
.active {
  background: #e6e9f0;
  border-radius: 5px;
}
</style>
