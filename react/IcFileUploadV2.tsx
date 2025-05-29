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
      height={20}
      x={3}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <g fill="#333">
        <path
          fillRule="evenodd"
          d="M13.5 2.5a7 7 0 0 1 7 7v9a3 3 0 0 1-3 3h-3.357a1 1 0 1 1 0-2H17.5a1 1 0 0 0 1-1v-9h-4a1 1 0 0 1-1-1v-4h-7a1 1 0 0 0-1 1V9a1 1 0 1 1-2 0V5.5a3 3 0 0 1 3-3zm2 5h2.584A5.02 5.02 0 0 0 15.5 4.916z"
          clipRule="evenodd"
        />
        <path d="M8.703 10.789a1 1 0 0 0-1.406 0l-3.5 3.456a1 1 0 0 0 1.406 1.423L7 13.893V20.5a1 1 0 1 0 2 0v-6.607l1.797 1.775a1 1 0 0 0 1.406-1.423z" />
      </g>
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
