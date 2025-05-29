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
      height={20}
      x={2}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M17.5 10.5a4 4 0 0 1-3.104-1.477l-3.962 2.25a4 4 0 0 1 .003 1.436l3.97 2.254a4 4 0 1 1-.843 1.821l-3.967-2.252a4 4 0 1 1-.012-5.077l3.975-2.258A4 4 0 1 1 17.5 10.5m0-2a2 2 0 0 1-1.806-1.14 1 1 0 0 0-.065-.151A2 2 0 1 1 17.5 8.5M6.5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4m9 3.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
