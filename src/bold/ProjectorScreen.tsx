/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function ProjectorScreen(props: IconProps) {
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
        x1={48}
        y1={176}
        x2={48}
        y2={80}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={208}
        y1={80}
        x2={208}
        y2={176}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Rect
        x={32}
        y={40}
        width={192}
        height={40}
        rx={8}
        strokeWidth={24}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Line
        x1={128}
        y1={176}
        x2={128}
        y2={232}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Circle cx={128} cy={232} r={24} fill={props.color} />
      <Line
        x1={32}
        y1={176}
        x2={224}
        y2={176}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default ProjectorScreen;
