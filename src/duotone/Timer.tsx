/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function Timer(props: IconProps) {
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
      <Circle cx={128} cy={128} r={88} opacity={0.2} />
      <Circle
        cx={128}
        cy={128}
        r={88}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={16}
      />
      <Line
        x1={128}
        y1={128}
        x2={167.59798}
        y2={88.40202}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={104}
        y1={8}
        x2={152}
        y2={8}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Timer;
