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
      <g fill="#000">
        <path
          fillRule="evenodd"
          d="M2 4a1 1 0 0 1 1-1h1.898A2 2 0 0 1 6.86 4.618L7.324 7H19.22a2 2 0 0 1 1.94 2.484l-1.309 5.243A3 3 0 0 1 16.941 17H9.628a3 3 0 0 1-2.951-2.461l-1.16-6.354L4.897 5H3a1 1 0 0 1-1-1m5.699 5 .945 5.18a1 1 0 0 0 .984.82h7.313a1 1 0 0 0 .97-.758L19.22 9z"
          clipRule="evenodd"
        />
        <path d="M18.889 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9.4 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
      </g>
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
