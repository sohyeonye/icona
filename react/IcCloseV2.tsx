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
      width={18}
      height={18}
      x={3}
      y={3}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#333"
        d="M18.222 19.778a1.1 1.1 0 1 0 1.556-1.556L13.556 12l6.222-6.222a1.1 1.1 0 1 0-1.556-1.556L12 10.444 5.778 4.222a1.1 1.1 0 1 0-1.556 1.556L10.444 12l-6.222 6.222a1.1 1.1 0 1 0 1.556 1.556L12 13.556z"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
