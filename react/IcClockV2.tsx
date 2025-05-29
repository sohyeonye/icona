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
      <g fill="#333">
        <path d="M12 7.25a.75.75 0 0 1 .75.75v4.499l2.868 1.188a.75.75 0 1 1-.574 1.386L11.73 13.7a.75.75 0 0 1-.479-.717V8a.75.75 0 0 1 .75-.75" />
        <path
          fillRule="evenodd"
          d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14"
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
