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
      height={19}
      x={3}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <g fill="#333">
        <path d="M11.324 16.737a1 1 0 0 0 1.352 0l6-5.5a1 1 0 0 0-1.352-1.474L13 13.727V3a1 1 0 1 0-2 0v10.727L6.676 9.763a1 1 0 1 0-1.352 1.474zM4 19a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z" />
      </g>
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
