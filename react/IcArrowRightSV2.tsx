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
      width={15}
      height={14}
      x={5}
      y={5}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M18.793 11.237a1.1 1.1 0 0 1 0 1.526l-4.813 5a1.1 1.1 0 1 1-1.585-1.526l3.02-3.137H7a1.1 1.1 0 0 1 0-2.2h8.415l-3.02-3.137a1.1 1.1 0 0 1 1.585-1.526z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
