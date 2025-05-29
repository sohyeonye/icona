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
      height={16}
      x={2}
      y={4}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <g fill="#333">
        <path d="M2 5.9a1.1 1.1 0 0 1 1.1-1.1h17.8a1.1 1.1 0 0 1 0 2.2H3.1A1.1 1.1 0 0 1 2 5.9M2 12a1.1 1.1 0 0 1 1.1-1.1h17.8a1.1 1.1 0 0 1 0 2.2H3.1A1.1 1.1 0 0 1 2 12M3.1 17a1.1 1.1 0 0 0 0 2.2h17.8a1.1 1.1 0 0 0 0-2.2z" />
      </g>
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
