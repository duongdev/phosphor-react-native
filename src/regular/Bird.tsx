/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Line, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function Bird(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle cx={164} cy={68} r={12} fill={props.color} />
      <Line
        x1={120}
        y1={136}
        x2={80}
        y2={184}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M208,96v24a96,96,0,0,1-96,96H8L104,96V76A52.00738,52.00738,0,0,1,206.33275,62.88778L232,80Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Bird;
