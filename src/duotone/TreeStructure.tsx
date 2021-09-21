/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function TreeStructure(props: IconProps) {
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
      <Rect x={24} y={100} width={56} height={56} rx={8} opacity={0.2} />
      <Rect x={160} y={40} width={64} height={64} rx={8} opacity={0.2} />
      <Rect x={160} y={152} width={64} height={64} rx={8} opacity={0.2} />
      <Rect
        x={24}
        y={100}
        width={56}
        height={56}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Rect
        x={160}
        y={40}
        width={64}
        height={64}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Rect
        x={160}
        y={152}
        width={64}
        height={64}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Line
        x1={80}
        y1={128}
        x2={120}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M160,184H144a24,24,0,0,1-24-24V96a24,24,0,0,1,24-24h16"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default TreeStructure;
