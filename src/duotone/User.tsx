/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function User(props: IconProps) {
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
      <Circle cx={128} cy={96} r={64} opacity={0.2} fill={props.color} />
      <Circle
        cx={128}
        cy={96}
        r={64}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={16}
      />
      <Path
        d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default User;
