/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, G, Circle, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function CirclesThreePlus(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <G>
        <Circle cx={76} cy={76} r={44} />
        <Circle cx={180} cy={76} r={44} />
        <Circle cx={76} cy={180} r={44} />
        <Path d="M208,172H188V152a8,8,0,0,0-16,0v20H152a8,8,0,0,0,0,16h20v20a8,8,0,0,0,16,0V188h20a8,8,0,0,0,0-16Z" />
      </G>
    </Svg>
  );
}

export default CirclesThreePlus;
