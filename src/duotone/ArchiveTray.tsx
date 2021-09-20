import * as React from 'react';
import Svg, { Rect, Path, Polyline, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function ArchiveTray(props: IconProps) {
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
        d="M76.68066,160a7.9996,7.9996,0,0,1,5.65674,2.34326l19.31348,19.31348A7.99962,7.99962,0,0,0,107.30762,184h41.373a7.9996,7.9996,0,0,0,5.65674-2.34326l19.31348-19.31348A7.99962,7.99962,0,0,1,179.30762,160h36.68652l.00586.00439V48a7.99977,7.99977,0,0,0-8-8H48a7.99977,7.99977,0,0,0-8,8V160Z"
        opacity={0.2}
      />
      <Rect
        x={40}
        y={40}
        width={176}
        height={176}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Polyline
        points="94.059 118.059 128 152 161.941 118.059"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={128}
        y1={72}
        x2={128}
        y2={152}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M39.99414,160H76.68043a8,8,0,0,1,5.65686,2.34315l19.3137,19.3137A8,8,0,0,0,107.30785,184h41.37258a8,8,0,0,0,5.65686-2.34315l19.3137-19.3137A8,8,0,0,1,179.30785,160h36.68629"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default ArchiveTray;
