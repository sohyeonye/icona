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
      height={19}
      x={2}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <g fill="#333">
        <path d="M11 8.5a1 1 0 1 1 2 0V13a1 1 0 1 1-2 0zM12 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
        <path
          fillRule="evenodd"
          d="M14.591 3.523c-1.142-2.03-4.04-2.03-5.182 0L2.393 16.007C1.265 18.012 2.7 20.5 4.983 20.5h14.033c2.284 0 3.719-2.488 2.591-4.493zm-3.455.99a.988.988 0 0 1 1.728 0l7.016 12.484c.376.668-.102 1.497-.864 1.497H4.984c-.762 0-1.24-.829-.864-1.497z"
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
