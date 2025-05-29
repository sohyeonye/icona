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
      <g fill="#333">
        <path d="M4 12a8 8 0 0 1 10.667-7.545 1 1 0 1 0 .666-1.886A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a10 10 0 0 0-.556-3.295 1 1 0 0 0-1.888.659c.287.824.444 1.71.444 2.636a8 8 0 1 1-16 0" />
        <path d="M20.283 5.772a1.1 1.1 0 1 0-1.566-1.544l-8.608 8.728-2.348-2.25a1.1 1.1 0 0 0-1.522 1.588l3.13 3a1.1 1.1 0 0 0 1.545-.022z" />
      </g>
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
