<template>
  <div class="container">
    <article>
      <section class="section-example">
        <h2 class="heading-primary">Rect</h2>
        <div ref="exampleRect" class="canvas-container"></div>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent }   from 'vue';
import { createRectExample } from '@/modules/shapes/rect';

export default defineComponent({
  mounted(): void {
    createRectExample(this.$refs.exampleRect as HTMLDivElement);
  }
});
</script>

<style>
.section-example {
  width: 100%;
}

.canvas-container {
  width: 100%;
  height: 300px;
  background-color: var(--color-white);
}
</style>