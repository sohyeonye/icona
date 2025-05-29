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
      height={17}
      x={2}
      y={4}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M8.004 6C5.798 6 4 7.797 4 10.03c0 2.797 1.28 4.79 2.904 6.223 1.645 1.45 3.616 2.295 4.861 2.72l.01.003q-.001.002.068.014a1.2 1.2 0 0 0 .314 0q.068-.012.068-.014l.01-.003c1.245-.425 3.217-1.27 4.861-2.72C18.72 14.82 20 12.827 20 10.03 20 7.797 18.202 6 15.996 6c-1.299 0-2.464.63-3.193 1.612a1 1 0 0 1-1.606 0A3.96 3.96 0 0 0 8.004 6M2 10.03C2 6.702 4.684 4 8.004 4c1.54 0 2.939.583 3.997 1.537A5.96 5.96 0 0 1 15.996 4C19.316 4 22 6.702 22 10.03c0 3.502-1.636 6.007-3.58 7.723-1.923 1.694-4.17 2.645-5.535 3.111A2.8 2.8 0 0 1 12 21c-.272 0-.593-.034-.885-.136-1.366-.466-3.612-1.417-5.534-3.111C3.636 16.037 2 13.532 2 10.03"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
