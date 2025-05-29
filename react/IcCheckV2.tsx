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
      height={13}
      x={2}
      y={6}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M20.79 6.835a1.1 1.1 0 0 1-.025 1.555l-10.333 10a1.1 1.1 0 0 1-1.531 0l-5.667-5.5a1.1 1.1 0 1 1 1.532-1.58l4.902 4.758 9.567-9.258a1.1 1.1 0 0 1 1.556.025"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
