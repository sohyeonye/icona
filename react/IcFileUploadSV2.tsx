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
      width={14}
      height={16}
      x={5}
      y={4}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <g fill="#333">
        <path
          fillRule="evenodd"
          d="M12.5 4a6 6 0 0 1 6 6v7a3 3 0 0 1-3 3h-1.286a1 1 0 1 1 0-2H15.5a1 1 0 0 0 1-1v-7h-3.75a.75.75 0 0 1-.75-.75V6H8.5a1 1 0 0 0-1 1v2.176a1 1 0 1 1-2 0V7a3 3 0 0 1 3-3zm1 4.5h2.71a4.01 4.01 0 0 0-2.71-2.374z"
          clipRule="evenodd"
        />
        <path d="M10.216 10.801a1 1 0 0 0-1.432 0l-3 3.073a1 1 0 0 0 1.432 1.397L8.5 13.956V19a1 1 0 1 0 2 0v-5.044l1.284 1.315a1 1 0 1 0 1.431-1.397z" />
      </g>
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
