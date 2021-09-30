/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, G, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function CirclesFour(props: IconProps) {
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
      <G>
        <Circle cx={76} cy={76} r={44} fill={props.color} />
        <Circle cx={180} cy={76} r={44} fill={props.color} />
        <Circle cx={76} cy={180} r={44} fill={props.color} />
        <Circle cx={180} cy={180} r={44} fill={props.color} />
      </G>
    </Svg>
  );
}

export default CirclesFour;
