/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowLeft(props: IconProps) {
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
        x1={216}
        y1={128}
        x2={40}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Polyline
        points="112 56 40 128 112 200"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default ArrowLeft;
