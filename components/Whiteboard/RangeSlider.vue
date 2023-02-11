<template>
  <VueSlider
    :lazy="true"
    :min="min"
    :max="max"
    :dotSize="12"
    :height="3"
    :interval="2"
    :processStyle="{ background: 'black' }"
    :bgStyle="{ backgroundColor: '#e6e9f0' }"
    :sliderStyle="{ backgroundColor: 'black', boxShadow: 'unset' }"
    tooltip="none"
    :width="'168px'"
    v-model="sliderValue"
  ></VueSlider>
</template>

<script>
import VueSlider from "vue-3-slider-component";
// import { reactive, toRefs } from "vue";

export default {
  // setup() {
  //   const data = reactive({ value: 0 });
  //   return toRefs(data);
  // },
  components: {
    VueSlider,
  },
  data() {
    return {
      sliderValue: this.value,
    };
  },
  props: ["min", "max", "value", "onChange"],
  watch: {
    sliderValue: function (size) {
      this.onChange(size);
    },
  },
};
</script>
