/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function CrosshairSimple(props: IconProps) {
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
      <Circle cx={128} cy={128} r={92} opacity={0.2} fill={props.color} />
      <Circle
        cx={128}
        cy={128}
        r={92}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={128}
        y1={36}
        x2={128}
        y2={76}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={36}
        y1={128}
        x2={76}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={128}
        y1={220}
        x2={128}
        y2={180}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={220}
        y1={128}
        x2={180}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default CrosshairSimple;
