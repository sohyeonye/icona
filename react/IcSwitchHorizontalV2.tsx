/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="prefix__a"
      width={20}
      height={18}
      x={2}
      y={3}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <g fill="#333">
        <path d="M21.278 8.778a1.1 1.1 0 0 0 0-1.556l-3.5-3.5a1.1 1.1 0 0 0-1.556 1.556L17.844 6.9H3.5a1.1 1.1 0 0 0 0 2.2h14.344l-1.622 1.622a1.1 1.1 0 1 0 1.556 1.556zM2.722 15.222a1.1 1.1 0 0 0 0 1.556l3.5 3.5a1.1 1.1 0 1 0 1.556-1.556L6.156 17.1H20.5a1.1 1.1 0 0 0 0-2.2H6.156l1.622-1.622a1.1 1.1 0 1 0-1.556-1.556z" />
      </g>
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
