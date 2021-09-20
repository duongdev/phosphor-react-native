import * as React from 'react';
import Svg, { Rect, Polygon, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowFatLinesDown(props: IconProps) {
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
        points="32 136 128 232 224 136 176 136 176 116 80 116 80 136 32 136"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={176}
        y1={44}
        x2={80}
        y2={44}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={176}
        y1={80}
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

export default ArrowFatLinesDown;
