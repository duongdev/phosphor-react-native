import * as React from 'react';
import Svg, { Rect, Polygon, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowFatLineUp(props: IconProps) {
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
        points="32 120 128 24 224 120 176 120 176 184 80 184 80 120 32 120"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Line
        x1={176}
        y1={216}
        x2={80}
        y2={216}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
    </Svg>
  );
}

export default ArrowFatLineUp;
