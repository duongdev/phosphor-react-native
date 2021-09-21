/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Line, Polyline, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function PersonSimple(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle cx={127.88745} cy={48} r={24} opacity={0.2} />
      <Circle
        cx={127.88745}
        cy={48}
        r={24}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={128}
        y1={104}
        x2={128}
        y2={152}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="64 224 128 152 192 224"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M32,128s40-24,96-24,96,24,96,24"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default PersonSimple;
