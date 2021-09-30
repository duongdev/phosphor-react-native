/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function DotsThreeCircle(props: IconProps) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Circle cx={128} cy={128} r={8} fill={props.color} />
      <Circle cx={80} cy={128} r={8} fill={props.color} />
      <Circle cx={176} cy={128} r={8} fill={props.color} />
    </Svg>
  );
}

export default DotsThreeCircle;
