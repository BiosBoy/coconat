import React, { useState } from "react";

import { sankeyLinkHorizontalO, sankeyLinkHorizontal } from "./utils";

type LinkProps = {
  link: any;
  color: string;
  maxWidth?: number;
};

const Link = ({ link, color, maxWidth }: LinkProps) => {
  const linkWidth = maxWidth ? (link.value / link.source.value) * maxWidth : link.width;
  const path = maxWidth ? sankeyLinkHorizontalO()(link) : sankeyLinkHorizontal()(link);

  const [opacity, setOpacity] = useState(0.3);

  return (
    <path
      d={path as unknown as string}
      style={{
        fill: "none",
        strokeOpacity: opacity,
        stroke: color,
        strokeWidth: linkWidth && !isNaN(linkWidth) ? linkWidth : 0
      }}
      onMouseEnter={() => setOpacity(0.8)}
      onMouseLeave={() => setOpacity(0.3)}
    >
      <title>
        {link.source.name} -&gt; {link.target.name}: {link.value}
      </title>
    </path>
  );
}

export default Link;
