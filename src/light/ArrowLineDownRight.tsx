import * as React from 'react';
import Svg, { Rect, Line, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowLineDownRight(props: IconProps) {
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
        x1={80}
        y1={88}
        x2={192}
        y2={200}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Polyline
        points="192 100 192 200 92 200"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Line
        x1={40}
        y1={40.00373}
        x2={216}
        y2={40.00373}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

export default ArrowLineDownRight;
