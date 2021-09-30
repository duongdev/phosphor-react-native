/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Path, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function Bicycle(props: IconProps) {
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
      <Circle cx={208} cy={160} r={40} opacity={0.2} fill={props.color} />
      <Circle cx={48} cy={160} r={40} opacity={0.2} fill={props.color} />
      <Path
        d="M208,80a16,16,0,0,0-16-16H152l56,96"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle
        cx={208}
        cy={160}
        r={40}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle
        cx={48}
        cy={160}
        r={40}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="48 64 76 64 132 160"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="170.087 96 94.667 96 48 160"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Bicycle;
