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
      <g fill="#000" fillRule="evenodd" clipRule="evenodd">
        <path d="M12.145 4.5H3a1 1 0 0 0 0 2h9.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-2.145a3.502 3.502 0 0 0-6.71 0M14 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M2 18.5a1 1 0 0 1 1-1h9.145a3.502 3.502 0 0 1 6.71 0H21a1 1 0 1 1 0 2h-2.145a3.502 3.502 0 0 1-6.71 0H3a1 1 0 0 1-1-1M15.5 17a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path d="M21 11a1 1 0 1 1 0 2h-9.145a3.502 3.502 0 0 1-6.71 0H3a1 1 0 1 1 0-2h2.145a3.502 3.502 0 0 1 6.71 0zM7 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0" />
      </g>
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
