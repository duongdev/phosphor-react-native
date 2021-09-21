/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function BatteryCharging(props: IconProps) {
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
        x={46}
        y={38}
        width={144}
        height={180}
        rx={16}
        transform="translate(246 10) rotate(90)"
        strokeWidth={24}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Line
        x1={244}
        y1={96}
        x2={244}
        y2={160}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Polyline
        points="118 168 134 128 102 128 118 88"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={96}
        y1={268}
        x2={160}
        y2={268}
        fill="none"
        opacity={0.1}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
        stroke={props.color}
      />
    </Svg>
  );
}

export default BatteryCharging;
