/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function ComputerTower(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Line
        x1={160}
        y1={72}
        x2={96}
        y2={72}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Line
        x1={160}
        y1={104}
        x2={96}
        y2={104}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Rect
        x={32}
        y={56}
        width={192}
        height={144}
        rx={8}
        transform="translate(256 0) rotate(90)"
        strokeWidth={8}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Circle cx={128} cy={180} r={8} fill={props.color} />
    </Svg>
  );
}

export default ComputerTower;
