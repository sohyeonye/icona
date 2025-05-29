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
        <path d="M6 15.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M10.25 14.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" />
        <path
          fillRule="evenodd"
          d="M5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3zm-1 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1V8H4zM4 10v6.5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10z"
          clipRule="evenodd"
        />
      </g>
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
