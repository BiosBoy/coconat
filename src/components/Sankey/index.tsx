import React, { memo, useState, useEffect } from 'react';
import { sankey as D3Sankey } from 'd3-sankey';
import { useWindowSize } from 'react-use';

import Shape from './Shape';

import './index.scss';

import { data } from './data';

const Sankey = memo(() => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const sankeyWidth = windowWidth - 100;
  const sankeyHeight = windowHeight - 100;

  const [graph, setGraph] = useState({
    nodes: [],
    links: []
  });

  useEffect(() => {
    setGraph(
      D3Sankey()
        .size([sankeyWidth, sankeyHeight])
        .nodeWidth(100)
        .nodePadding(40)
        .extent([[0, 0], [sankeyWidth, sankeyHeight - 50]])(data)
    );
  }, [sankeyWidth, sankeyHeight]);

  return (
    <svg width={sankeyWidth} height={sankeyHeight}>
      <Shape graph={graph} />
    </svg>
  );
});

Sankey.displayName = 'Sankey';

export default Sankey;
