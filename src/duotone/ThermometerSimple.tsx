/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Circle, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function ThermometerSimple(props: IconProps) {
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
      <Path
        d="M160.00787,147.01562,160,147.02539V48a32,32,0,0,0-64,0v99.02539l-.00787-.00977a52,52,0,1,0,64.01574,0ZM128,208a20,20,0,1,1,20-20A19.9999,19.9999,0,0,1,128,208Z"
        opacity={0.2}
      />
      <Path
        d="M96,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle
        cx={128}
        cy={188}
        r={20}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={128}
        y1={168}
        x2={128}
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

export default ThermometerSimple;
