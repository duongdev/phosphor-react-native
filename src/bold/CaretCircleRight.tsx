/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function CaretCircleRight(props: IconProps) {
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
        cx={128}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={24}
      />
      <Polyline
        points="116 92 156 128 116 164"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default CaretCircleRight;
