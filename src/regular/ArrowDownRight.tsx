import * as React from 'react';
import Svg, { Rect, Line, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowDownRight(props: IconProps) {
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
        x1={64}
        y1={64}
        x2={192}
        y2={192}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="88 192 192 192 192 88"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default ArrowDownRight;
