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
        <path d="M12.724 9.542a.75.75 0 0 1 0-1.062l1.416-1.415A.75.75 0 0 1 15.2 8.126l-1.415 1.416a.75.75 0 0 1-1.062 0M16.794 6.534a.75.75 0 1 0-1.062-1.061.75.75 0 0 0 1.062 1.061" />
        <path
          fillRule="evenodd"
          d="M4.214 12.708a5.004 5.004 0 1 0 7.076 7.076l8.492-8.492a5.004 5.004 0 1 0-7.076-7.076zm1.415 5.661a3 3 0 0 1 0-4.246l3.538-3.538 4.246 4.246-3.538 3.538a3 3 0 0 1-4.246 0m9.2-4.954 3.538-3.538a3.002 3.002 0 0 0-4.246-4.246l-3.538 3.538z"
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
