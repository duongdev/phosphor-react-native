/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function BatteryWarningVertical(props: IconProps) {
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
        x1={128}
        y1={92}
        x2={128}
        y2={132}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={96}
        y1={8}
        x2={160}
        y2={8}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Rect
        x={56}
        y={40}
        width={144}
        height={184}
        rx={16}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Circle cx={128} cy={168} r={12} fill={props.color} />
    </Svg>
  );
}

export default BatteryWarningVertical;
