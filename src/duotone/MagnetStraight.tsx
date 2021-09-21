/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function MagnetStraight(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path d="M48,56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8V96H48Z" opacity={0.2} />
      <Path d="M152,56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V96H152Z" opacity={0.2} />
      <Line
        x1={48}
        y1={96}
        x2={104}
        y2={96}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={152}
        y1={96}
        x2={208}
        y2={96}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v86.9957c0,44.11169-35.28293,80.675-79.39341,81.00205A80.00008,80.00008,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default MagnetStraight;
