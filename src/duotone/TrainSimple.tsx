/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function TrainSimple(props: IconProps) {
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
        d="M212,56a24,24,0,0,0-24-24H68A24,24,0,0,0,44,56v72H212Z"
        opacity={0.2}
      />
      <Line
        x1={44}
        y1={128}
        x2={212}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={96}
        y1={208}
        x2={72}
        y2={240}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={160}
        y1={208}
        x2={184}
        y2={240}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Rect
        x={44}
        y={32}
        width={168}
        height={176}
        rx={24}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Circle cx={84} cy={172} r={12} />
      <Circle cx={172} cy={172} r={12} />
    </Svg>
  );
}

export default TrainSimple;
