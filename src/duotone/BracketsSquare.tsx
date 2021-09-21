/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function BracketsSquare(props: IconProps) {
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
      <Polyline
        points="80 40 40 40 40 216 80 216"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="176 40 216 40 216 216 176 216"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default BracketsSquare;
