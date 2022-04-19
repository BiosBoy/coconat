import { linkHorizontal } from "d3-shape";

export const horizontalSource = (d: any) => {
  const y = (d.source.y1 - d.source.y0) / 2 + d.source.y0;
  return [d.source.x1, y];
}

export const horizontalTarget = (d: any) => {
  const y = (d.target.y1 - d.target.y0) / 2 + d.target.y0;
  return [d.target.x0, y];
}

// @ts-ignore
export const sankeyLinkHorizontal = () => linkHorizontal().source(horizontalSource).target(horizontalTarget);
