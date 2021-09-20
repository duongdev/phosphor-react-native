import * as React from 'react';
import Svg, { Rect, Line, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowLineDown(props: IconProps) {
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
        x1={128}
        y1={31.99627}
        x2={128}
        y2={183.99627}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="56 111.996 128 183.996 200 111.996"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={40}
        y1={215.99627}
        x2={216}
        y2={215.99627}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default ArrowLineDown;
