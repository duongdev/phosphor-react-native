/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polygon, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowFatLinesRight(props: IconProps) {
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
        points="136 32 232 128 136 224 136 176 116 176 116 80 136 80 136 32"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={44}
        y1={176}
        x2={44}
        y2={80}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={80}
        y1={176}
        x2={80}
        y2={80}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default ArrowFatLinesRight;
