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
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12 3a4.5 4.5 0 0 0-4.5 4.5V8h-2a3 3 0 0 0-3 3v4a6 6 0 0 0 6 6h7a6 6 0 0 0 6-6v-4a3 3 0 0 0-3-3h-2v-.5A4.5 4.5 0 0 0 12 3m2.5 7v2a1 1 0 1 0 2 0v-2h2a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-7a4 4 0 0 1-4-4v-4a1 1 0 0 1 1-1h2v2a1 1 0 1 0 2 0v-2zm0-2v-.5a2.5 2.5 0 0 0-5 0V8z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
