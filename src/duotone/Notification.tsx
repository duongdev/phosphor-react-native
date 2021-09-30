/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function Notification(props: IconProps) {
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
      <Circle cx={196} cy={60} r={28} opacity={0.2} fill={props.color} />
      <Path
        d="M208,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h80"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle
        cx={196}
        cy={60}
        r={28}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Notification;
