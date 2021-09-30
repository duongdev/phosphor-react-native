/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ShoppingCartSimple(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle cx={80} cy={216} r={20} fill={props.color} />
      <Circle cx={184} cy={216} r={20} fill={props.color} />
      <Path
        d="M42.28575,72H221.71429l-24.113,84.39554A16,16,0,0,1,182.21689,168H81.78311a16,16,0,0,1-15.38439-11.60446L32.51492,37.80223A8,8,0,0,0,24.82273,32H12"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default ShoppingCartSimple;
