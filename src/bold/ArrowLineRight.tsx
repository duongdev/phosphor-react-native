import * as React from 'react';
import Svg, { Rect, Line, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowLineRight(props: IconProps) {
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
        x1={31.99627}
        y1={128}
        x2={175.99627}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Polyline
        points="103.996 56 175.996 128 103.996 200"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={216}
        y1={40}
        x2={216}
        y2={216}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default ArrowLineRight;
