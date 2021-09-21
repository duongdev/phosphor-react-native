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
      fill={props.color}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Rect
        x={32}
        y={56}
        width={192}
        height={144}
        rx={8}
        transform="translate(256 0) rotate(90)"
        opacity={0.2}
      />
      <Line
        x1={160}
        y1={72}
        x2={96}
        y2={72}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
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
        strokeWidth={16}
      />
      <Rect
        x={32}
        y={56}
        width={192}
        height={144}
        rx={8}
        transform="translate(256 0) rotate(90)"
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Circle cx={128} cy={180} r={12} />
    </Svg>
  );
}

export default ComputerTower;
