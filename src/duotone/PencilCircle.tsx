/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Circle, Polyline, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function PencilCircle(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path
        d="M80.00324,211.15879a96,96,0,1,1,95.99492-.00082l.00184.00318V176L128,72,80,176v35.16442Z"
        opacity={0.2}
      />
      <Circle
        cx={128}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="176 211.161 176 176 128 72 80 176 80 211.164"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M128,192a24,24,0,0,1,48,0"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M128,224V192a24,24,0,0,0-48,0"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={102.15385}
        y1={128}
        x2={153.84615}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default PencilCircle;
