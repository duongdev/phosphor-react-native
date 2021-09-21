/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function Chalkboard(props: IconProps) {
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
        d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={16}
        y1={200}
        x2={240}
        y2={200}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Polyline
        points="120 200 120 160 184 160 184 200"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Polyline
        points="72 200 72 88 184 88 184 120"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default Chalkboard;
