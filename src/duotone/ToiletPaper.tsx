/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Ellipse, Circle, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function ToiletPaper(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      fill={props.color}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Ellipse cx={64} cy={120} rx={40} ry={80} opacity={0.2} />
      <Circle cx={64} cy={120} r={12} fill={props.color} />
      <Ellipse
        cx={64}
        cy={120}
        rx={40}
        ry={80}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.18278-17.90861-80-40-80H64"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={104}
        y1={120}
        x2={128}
        y2={120}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={160}
        y1={120}
        x2={176}
        y2={120}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={208}
        y1={120}
        x2={232}
        y2={120}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default ToiletPaper;
