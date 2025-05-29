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
      height={12}
      x={2}
      y={5}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M3.222 15.778a1.1 1.1 0 0 1 0-1.556l8-8a1.1 1.1 0 0 1 1.556 0l8 8a1.1 1.1 0 0 1-1.556 1.556L12 8.556l-7.222 7.222a1.1 1.1 0 0 1-1.556 0"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
