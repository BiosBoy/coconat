import React, { useState } from "react";

import { sankeyLinkHorizontal } from "../../utils";

type LinkProps = {
  link: any;
  color: string;
  maxWidth?: number;
};

const Link = ({ link, color, maxWidth }: LinkProps) => {
  const linkWidth = (link.value / link.source.value) * maxWidth;
  const path = sankeyLinkHorizontal()(link);

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
        {link.source.Name} -&gt; {link.target.Name}: {link.value}
      </title>
    </path>
  );
}

export default Link;
