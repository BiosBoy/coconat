import React from "react";

import Node from './Node';
import Link from './Link';

import { makeColor } from '../../utils';

const Shape = ({ graph }) => {
    if (!graph) {
      return null;
    }

    const renderLinks = () => {
     return graph.links.map((link, i) => (
        <Link
          key={`sankey-link-${i}`}
          link={link}
          color={makeColor(graph, link.source.index)}
          maxWidth={30}
        />
      ))
    }

    const renderNodes = () => {
      const nodesToRender = graph.nodes.map((node, i) => {
        if (!node.Name) {
          return null;
        }

        return (
          <Node
            key={`sankey-node-${i}`}
            link={node}
            color={makeColor(graph, i)}
            name={node.Name}
            height={30}
            width={100}
          />
        );
      })

      return nodesToRender;
    }

    return (
      <g>
        {renderLinks()}
        {renderNodes()}
      </g>
    );
}

export default Shape;
