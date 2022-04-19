import React from "react";
import chroma from "chroma-js";
import * as d3 from "d3";

import Node from './Node';
import Link from './Link';

const Shape = ({ graph }) => {
    const color = chroma.scale("Set2").classes(graph.nodes.length);
    const colorScale = d3
      .scaleLinear()
      .domain([0, graph.nodes.length])
      .range([0, 1]);

    return (
      <g>
        {graph && graph.links.map((link, i) => (
            <Link
              key={`sankey-link-${i}`}
              link={link}
              color={color(colorScale(link.source.index)).hex()}
              maxWidth={30}
            />
          ))}
        {graph && graph.nodes.map((node, i) => (
            <Node
              key={`sankey-node-${i}`}
              link={node}
              color={color(colorScale(i)).hex()}
              name={node.name}
              height={30}
              width={100}
            />
          ))}
      </g>
    );
}

export default Shape;
