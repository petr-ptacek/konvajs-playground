<template>
  <article style="width: 100%; height: 100%;">
    <div class="container" ref="stageRef">
    </div>
  </article>
</template>

<script lang="ts" setup>
import { Colors }         from './../common/colors';
import Konva              from 'konva';
import { onMounted, ref } from 'vue';

const stageRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const containerEl: HTMLDivElement = stageRef.value!;
  const containerWidth: number = containerEl.offsetWidth;
  const containerHeight: number = containerEl.offsetHeight;

  const stage = new Konva.Stage({
    container: containerEl,
    width: containerWidth,
    height: containerHeight
  });

  const commonArrowConfig: Konva.ArrowConfig = {
    fill: Colors.White,
    stroke: Colors.White,
    strokeWidth: 5,
    points: [0, 0, 400, 0],
    pointerAtBeginning: false,
    lineJoin: 'round',
    lineCap: 'round',
    pointerWidth: 25 - 5,
    pointerLength: 25 - 5
  };

  const layer = new Konva.Layer();

  const arrow = new Konva.Arrow({
    ...commonArrowConfig,
    x: (containerWidth / 2) - 200,
    y: 100
  });

  layer.add(arrow);

  const arrowStroke10 = new Konva.Arrow({
    ...commonArrowConfig,
    x: (containerWidth / 2) - 200,
    y: 200,
    points: [0, 0, 400, 0],
    strokeWidth: 10
  });

  layer.add(arrowStroke10);

  const arrowDottedStrokeWidth = 10;
  const arrowDotted = new Konva.Arrow({
    ...commonArrowConfig,
    x: (containerWidth / 2) - 200,
    y: 300,
    strokeWidth: arrowDottedStrokeWidth,
    lineJoin: 'round',
    lineCap: 'round',
    pointerAtBeginning: false,
    dash: [0.001, 10 + arrowDottedStrokeWidth],
    dashEnabled: true
  });

  layer.add(arrowDotted);

  const arrowDashedStrokeWidth = 5;
  const arrowDashed = new Konva.Arrow({
    ...commonArrowConfig,
    x: (containerWidth / 2) - 200,
    y: 400,
    strokeWidth: arrowDashedStrokeWidth,
    lineJoin: 'round',
    lineCap: 'round',
    pointerAtBeginning: false,
    dash: [0.001, 10 + arrowDashedStrokeWidth, arrowDashedStrokeWidth / 2, 10 + arrowDashedStrokeWidth],
    dashEnabled: true
  });

  layer.add(arrowDashed);

  //
  stage.add(layer);
});
</script>

<style scoped>
</style>