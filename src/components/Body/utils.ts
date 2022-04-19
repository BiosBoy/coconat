import { linkHorizontal } from "d3-shape";

export const horizontalSourceO = (d: any) => {
  const y = (d.source.y1 - d.source.y0) / 2 + d.source.y0;
  return [d.source.x1, y];
}

export const horizontalTargetO = (d: any) => {
  const y = (d.target.y1 - d.target.y0) / 2 + d.target.y0;
  return [d.target.x0, y];
}

export const horizontalSource = (d: any) => {
  return [d.source.x1, d.y0];
}

export const horizontalTarget = (d: any) => {
  return [d.target.x0, d.y1];
}

export const sankeyLinkHorizontal = () => {
  // @ts-ignore
  return linkHorizontal().source(horizontalSource).target(horizontalTarget);
}

export const sankeyLinkHorizontalO = () => {
    // @ts-ignore
  return linkHorizontal().source(horizontalSourceO).target(horizontalTargetO);
}
