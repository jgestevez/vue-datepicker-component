<template>
  <teleport v-if="isMobile" to="body">
    <div class="react-google-flight-datepicker">
      <slot></slot>
    </div>
  </teleport>
  <template v-else>
    <slot></slot>
  </template>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const DialogWrapper = defineComponent({
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {}
});
export default DialogWrapper;
</script>
