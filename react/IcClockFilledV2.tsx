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
        fillRule="evenodd"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m.75-13a.75.75 0 0 0-1.5 0v4.983a.75.75 0 0 0 .479.716l3.315 1.374a.75.75 0 0 0 .574-1.386l-2.868-1.188z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
