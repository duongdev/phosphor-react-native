/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function Divide(props: IconProps) {
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
        x1={40}
        y1={128}
        x2={216}
        y2={128}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle cx={128} cy={64} r={16} fill={props.color} />
      <Circle cx={128} cy={192} r={16} fill={props.color} />
    </Svg>
  );
}

export default Divide;
