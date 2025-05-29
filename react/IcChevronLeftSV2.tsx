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
      width={8}
      height={14}
      x={7}
      y={5}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M14.528 18.278a1.1 1.1 0 0 1-1.556 0l-5.5-5.5a1.1 1.1 0 0 1 0-1.556l5.5-5.5a1.1 1.1 0 0 1 1.556 1.556L9.806 12l4.722 4.722a1.1 1.1 0 0 1 0 1.556"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
