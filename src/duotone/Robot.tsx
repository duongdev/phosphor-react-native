/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function Robot(props: IconProps) {
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
        d="M200,56H56A23.99994,23.99994,0,0,0,32,80V192a23.99994,23.99994,0,0,0,24,24H200a23.99994,23.99994,0,0,0,24-24V80A23.99994,23.99994,0,0,0,200,56ZM164,184H92a20,20,0,0,1,0-40h72a20,20,0,0,1,0,40Z"
        opacity={0.2}
      />
      <Rect
        x={32}
        y={56}
        width={192}
        height={160}
        rx={24}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Rect
        x={72}
        y={144}
        width={112}
        height={40}
        rx={19.99998}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Line
        x1={148}
        y1={144}
        x2={148}
        y2={184}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={108}
        y1={144}
        x2={108}
        y2={184}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={128}
        y1={56}
        x2={128}
        y2={16}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle cx={84} cy={108} r={12} />
      <Circle cx={172} cy={108} r={12} />
    </Svg>
  );
}

export default Robot;
