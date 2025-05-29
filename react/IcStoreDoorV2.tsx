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
      <path
        fill="#333"
        fillRule="evenodd"
        d="M5 4a3 3 0 0 0-3 3v3.941c0 .701.385 1.344 1 1.676V17a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4.383c.615-.332 1-.975 1-1.676V7a3 3 0 0 0-3-3zM4 7a1 1 0 0 1 1-1h3.25v3A2.25 2.25 0 0 1 4 10.032zm1 5.615V17a1 1 0 0 0 1 1h3.25v-1a2.75 2.75 0 1 1 5.5 0v1H18a1 1 0 0 0 1-1v-4.385a3.75 3.75 0 0 1-4-1.365 3.74 3.74 0 0 1-3 1.5 3.74 3.74 0 0 1-3-1.5 3.74 3.74 0 0 1-4 1.365m15-2.583V7a1 1 0 0 0-1-1h-3.25v3A2.25 2.25 0 0 0 20 10.032M14.25 6h-4.5v3a2.25 2.25 0 0 0 4.5 0zm-1 12v-1a1.25 1.25 0 1 0-2.5 0v1z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
