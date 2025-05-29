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
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <g fill="#333">
        <path
          fillRule="evenodd"
          d="M12.5 2a1 1 0 0 0-.923.615L9.333 8H8.5a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h8.735a2.93 2.93 0 0 0 2.7-1.751c.372-.852.88-2.073 1.296-3.29.402-1.177.769-2.487.769-3.459 0-.705-.159-1.53-.819-2.155C20.537 8.235 19.608 8 18.5 8h-1.666V5.5c0-.747-.19-1.39-.547-1.916a3.24 3.24 0 0 0-1.296-1.092C14.077 2.052 13.057 2 12.5 2m-1.577 7.385 2.229-5.349c.332.04.678.117.97.258.232.112.399.249.51.412.106.157.202.398.202.794V9a1 1 0 0 0 1 1H18.5c.875 0 1.196.193 1.306.297.095.09.194.266.194.703 0 .603-.257 1.627-.662 2.812a43 43 0 0 1-1.235 3.137.93.93 0 0 1-.868.551H9.5V10h.5a1 1 0 0 0 .923-.615"
          clipRule="evenodd"
        />
        <path d="M3.5 8a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
      </g>
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
