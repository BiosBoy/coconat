import { linkHorizontal } from "d3-shape";
import chroma from "chroma-js";
import * as d3 from "d3";

export const makeColor = (graph: any, index: number) => {
  const color = chroma.scale("Set2").classes(graph.nodes.length);
  const colorScale = d3
    .scaleLinear()
    .domain([0, graph.nodes.length])
    .range([0, 1]);

  return color(colorScale(index)).hex();
}

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
