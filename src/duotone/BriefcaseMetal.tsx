/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function BriefcaseMetal(props: IconProps) {
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
      <Path d="M32,112H224V80a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8Z" opacity={0.2} />
      <Path d="M32,176H224v32a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8Z" opacity={0.2} />
      <Rect
        x={32}
        y={72}
        width={192}
        height={144}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={32}
        y1={176}
        x2={224}
        y2={176}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={32}
        y1={112}
        x2={224}
        y2={112}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default BriefcaseMetal;
