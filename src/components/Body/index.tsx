import React, { memo, useState, useEffect } from 'react';
import { sankey as D3Sankey } from 'd3-sankey';

import Sankey from './Sankey';

import './index.scss';

import { data } from './data';

const Body = memo(() => {
  const sankeyWidth = window.innerWidth - 100;
  const sankeyHeight = window.innerHeight - 100;

  const [graph, setGraph] = useState({
    nodes: [],
    links: []
  });

  useEffect(() => {
    setGraph(
      D3Sankey()
        .size([sankeyWidth, sankeyHeight])
        .nodeWidth(15)
        .nodePadding(10)
        .extent([[0, 0], [sankeyWidth, sankeyHeight - 50]])(data)
    );
  }, [sankeyWidth, sankeyHeight]);

  return (
    <div>
      Hello World!
      <svg width={sankeyWidth} height={sankeyHeight}>
        <Sankey graph={graph} />
      </svg>
    </div>
  );
});

Body.displayName = 'Body';

export default Body;
