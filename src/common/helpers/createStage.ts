import Konva from 'konva';

export function createStage(element: HTMLDivElement): Konva.Stage {
  const width = 0;
  const height = 0;

  return new Konva.Stage({
    width: 0,
    height: 0,
    container: element
  });
}
