/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function DiceFive(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Rect
        x={40}
        y={40}
        width={176}
        height={176}
        rx={24}
        strokeWidth={24}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Circle cx={88} cy={88} r={16} />
      <Circle cx={128} cy={128} r={16} />
      <Circle cx={168} cy={88} r={16} />
      <Circle cx={88} cy={168} r={16} />
      <Circle cx={168} cy={168} r={16} />
    </Svg>
  );
}

export default DiceFive;
