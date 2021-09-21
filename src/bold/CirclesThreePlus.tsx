/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, G, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function CirclesThreePlus(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle
        cx={74}
        cy={74}
        r={34}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Circle
        cx={182}
        cy={74}
        r={34}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Circle
        cx={74}
        cy={182}
        r={34}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <G>
        <Line
          x1={182}
          y1={156}
          x2={182}
          y2={208}
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={24}
        />
        <Line
          x1={208}
          y1={182}
          x2={156}
          y2={182}
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={24}
        />
      </G>
    </Svg>
  );
}

export default CirclesThreePlus;
