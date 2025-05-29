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
        <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V10h2.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H13v2.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V12H8.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H11z" />
        <path
          fillRule="evenodd"
          d="M12 2c-3.333 0-5.803.632-7.185 1.106C3.64 3.508 3 4.622 3 5.746v6.807c0 2.928 1.63 5.088 3.375 6.555 1.743 1.465 3.712 2.338 4.68 2.714.611.238 1.279.238 1.89 0 .968-.376 2.937-1.249 4.68-2.714C19.37 17.64 21 15.48 21 12.553V5.746c0-1.124-.64-2.238-1.815-2.64C17.803 2.632 15.333 2 12 2M5.46 5.008C6.669 4.594 8.92 4.01 12 4.01s5.331.584 6.54.998c.25.086.46.348.46.738v6.807c0 2.103-1.156 3.75-2.658 5.013s-3.241 2.04-4.118 2.381a.6.6 0 0 1-.448 0c-.877-.341-2.616-1.118-4.118-2.381S5 14.656 5 12.553V5.746c0-.39.21-.652.46-.738"
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
