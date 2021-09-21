/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Polyline, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function Watch(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle cx={128} cy={128} r={72} opacity={0.2} />
      <Circle
        cx={128}
        cy={128}
        r={72}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={16}
      />
      <Polyline
        points="128 88 128 128 168 128"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M88,68.12774l6.80838-37.55481A8,8,0,0,1,102.68007,24h50.63985a8,8,0,0,1,7.87169,6.57294L168,68.128"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M88,187.87226l6.80838,37.55481A8,8,0,0,0,102.68007,232h50.63985a8,8,0,0,0,7.87169-6.57294L168,187.872"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Watch;
