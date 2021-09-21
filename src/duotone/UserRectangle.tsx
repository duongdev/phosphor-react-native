/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function UserRectangle(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path
        d="M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H60.09857v-.00439A72.02979,72.02979,0,0,1,128,160a40,40,0,1,1,40-40,40.00006,40.00006,0,0,1-40,40,72.02986,72.02986,0,0,1,67.90149,47.99561V208H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Z"
        opacity={0.2}
      />
      <Circle
        cx={128}
        cy={120}
        r={40}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Rect
        x={32}
        y={48}
        width={192}
        height={160}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M60.09854,207.99545a72.02945,72.02945,0,0,1,135.80292,0"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default UserRectangle;
