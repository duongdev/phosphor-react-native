/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function CirclesThreePlus(props: IconProps) {
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
      <Circle cx={76} cy={76} r={36} opacity={0.2} fill={props.color} />
      <Circle cx={180} cy={76} r={36} opacity={0.2} fill={props.color} />
      <Circle cx={76} cy={180} r={36} opacity={0.2} fill={props.color} />
      <Circle
        cx={76}
        cy={76}
        r={36}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle
        cx={180}
        cy={76}
        r={36}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle
        cx={76}
        cy={180}
        r={36}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={180}
        y1={152}
        x2={180}
        y2={208}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={208}
        y1={180}
        x2={152}
        y2={180}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default CirclesThreePlus;
