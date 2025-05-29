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
      <path
        fill="#333"
        fillRule="evenodd"
        d="M9.09 3.626 12 6.576l2.91-2.95c1.341-1.359 3.59-.368 3.59 1.491V7a3 3 0 0 1 3 3v2.026a1 1 0 0 1-.895.995V18.5a3 3 0 0 1-3 3H6.395a3 3 0 0 1-3-3v-5.48a1 1 0 0 1-.895-.994V10a3 3 0 0 1 3-3V5.117c0-1.859 2.249-2.85 3.59-1.49M7.5 5.117c0-.043.01-.061.017-.07a.1.1 0 0 1 .05-.038.1.1 0 0 1 .052-.008c.005 0 .02.003.047.03L9.609 7H7.5zM9.46 9H5.5a1 1 0 0 0-1 1v.885a.75.75 0 0 1 .342-.082h4.619zm-4.065 3.303V18.5a1 1 0 0 0 1 1H9.46v-7.197zM10.96 19.5h2.079v-7.197h-2.08zm3.579 0h3.065a1 1 0 0 0 1-1v-6.197H14.54zm4.96-8.697V10a1 1 0 0 0-1-1h-3.96v1.803zM13.04 9h-2.08v1.803h2.08zm3.294-3.969L14.391 7H16.5V5.117c0-.043-.01-.061-.017-.07a.1.1 0 0 0-.05-.038.1.1 0 0 0-.052-.008c-.005 0-.02.003-.047.03"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#333" d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default SvgComponent;
