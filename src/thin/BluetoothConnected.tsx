/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polygon, Line, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function BluetoothConnected(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Polygon
        points="120 32 184 80 120 128 120 32"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Polygon
        points="120 128 184 176 120 224 120 128"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Line
        x1={56}
        y1={80}
        x2={120}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Line
        x1={56}
        y1={176}
        x2={120}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Circle cx={52} cy={128} r={8} />
      <Circle cx={196} cy={128} r={8} />
    </Svg>
  );
}

export default BluetoothConnected;
