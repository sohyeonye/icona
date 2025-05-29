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
      width={16}
      height={16}
      x={4}
      y={4}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#333"
        d="M13.1 6a1.1 1.1 0 0 0-2.2 0v4.9H6a1.1 1.1 0 0 0 0 2.2h4.9V18a1.1 1.1 0 0 0 2.2 0v-4.9H18a1.1 1.1 0 0 0 0-2.2h-4.9z"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
