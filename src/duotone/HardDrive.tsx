/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function HardDrive(props: IconProps) {
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
      <Rect x={24} y={72} width={208} height={112} rx={8} opacity={0.2} />
      <Rect
        x={24}
        y={72}
        width={208}
        height={112}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Circle cx={188} cy={128} r={12} fill={props.color} />
    </Svg>
  );
}

export default HardDrive;
