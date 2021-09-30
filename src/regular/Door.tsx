/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Path, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function Door(props: IconProps) {
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
        x1={24}
        y1={224}
        x2={232}
        y2={224}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle cx={156} cy={128} r={12} fill={props.color} />
    </Svg>
  );
}

export default Door;
