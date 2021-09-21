/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function X(props: IconProps) {
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
      <Line
        x1={200}
        y1={56}
        x2={56}
        y2={200}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={200}
        y1={200}
        x2={56}
        y2={56}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default X;
