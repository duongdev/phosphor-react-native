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
        strokeWidth={8}
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
        strokeWidth={8}
      />
      <Circle cx={188} cy={116} r={8} fill={props.color} />
      <Circle cx={188} cy={164} r={8} fill={props.color} />
      <Line
        x1={152}
        y1={208}
        x2={152}
        y2={72}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
    </Svg>
  );
}

export default Television;
