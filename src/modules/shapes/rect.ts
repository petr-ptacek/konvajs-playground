import Konva      from 'konva';
import { Colors } from '@/common/colors.js';

export function createRectExample(container: HTMLDivElement) {
  const WIDTH = 200;
  const HEIGHT = 200;

  const stage: Konva.Stage = new Konva.Stage({
    container,
    name: 'stage',
    width: container.offsetWidth,
    height: container.offsetHeight
  });

  const layer: Konva.Layer = new Konva.Layer({
    name: 'layer'
  });

  const rect: Konva.Rect = new Konva.Rect({
    name: 'rect',
    x: (stage.width() / 2) - WIDTH / 2,
    y: (stage.height() / 2) - HEIGHT / 2,
    width: WIDTH,
    height: HEIGHT,
    fill: Colors.Blue,
    stroke: Colors.Black
  });

  layer.add(rect);
  stage.add(layer);
  layer.draw();
}