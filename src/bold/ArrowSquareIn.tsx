import * as React from 'react';
import Svg, { Rect, Polyline, Line, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowSquareIn(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Polyline
        points="112 204 111.992 144.008 52 144"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={39.9714}
        y1={216.0286}
        x2={111.9714}
        y2={144.0286}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Path
        d="M160,192h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V96"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default ArrowSquareIn;
