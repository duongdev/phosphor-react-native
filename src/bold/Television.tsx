/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polyline, Circle, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function Television(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Rect
        x={32}
        y={72}
        width={192}
        height={136}
        rx={8}
        strokeWidth={24}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Polyline
        points="80 24 128 72 176 24"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Circle cx={184} cy={116} r={16} />
      <Circle cx={184} cy={164} r={16} />
      <Line
        x1={140}
        y1={208}
        x2={140}
        y2={72}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default Television;
