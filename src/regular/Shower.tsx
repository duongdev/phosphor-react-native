/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function Shower(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle cx={60} cy={228} r={12} fill={props.color} />
      <Circle cx={88} cy={200} r={12} fill={props.color} />
      <Circle cx={28} cy={196} r={12} fill={props.color} />
      <Circle cx={56} cy={168} r={12} fill={props.color} />
      <Path
        d="M248,40H219.31371a8,8,0,0,0-5.65686,2.34315L184,72,55.334,93.44433a8,8,0,0,0-4.34166,13.548l98.01532,98.01532a8,8,0,0,0,13.548-4.34166L184,72"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Shower;
