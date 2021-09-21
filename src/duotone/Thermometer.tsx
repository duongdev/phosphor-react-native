/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function Thermometer(props: IconProps) {
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
      <Circle
        cx={212}
        cy={80}
        r={20}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M88,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle
        cx={120}
        cy={188}
        r={20}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M152.00787,147.01562,152,147.02539V48a32,32,0,0,0-64,0v99.02539l-.00787-.00977a52,52,0,1,0,64.01574,0ZM120,208a20,20,0,1,1,20-20A19.9999,19.9999,0,0,1,120,208Z"
        opacity={0.2}
      />
      <Line
        x1={120}
        y1={168}
        x2={120}
        y2={88}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Thermometer;
