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
        points="32 136 128 232 224 136 176 136 176 104 80 104 80 136 32 136"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Line
        x1={176}
        y1={40}
        x2={80}
        y2={40}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Line
        x1={176}
        y1={72}
        x2={80}
        y2={72}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
    </Svg>
  );
}

export default ArrowFatLinesDown;
