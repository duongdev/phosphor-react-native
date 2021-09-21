/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function SimCard(props: IconProps) {
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
      <Rect x={80} y={120} width={96} height={72} opacity={0.2} />
      <Path
        d="M200,224.00005H55.99219a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8L152,32l56,56v128A8,8,0,0,1,200,224.00005Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Rect
        x={80}
        y={120}
        width={96}
        height={72}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Line
        x1={112}
        y1={152}
        x2={112}
        y2={192}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={144}
        y1={152}
        x2={144}
        y2={192}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default SimCard;
