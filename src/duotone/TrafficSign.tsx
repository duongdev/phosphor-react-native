/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polyline, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function TrafficSign(props: IconProps) {
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
        x={45.97561}
        y={45.97561}
        width={164.04877}
        height={164.04877}
        rx={8}
        transform="translate(-53.01934 128) rotate(-45)"
        opacity={0.2}
      />
      <Polyline
        points="144 144 168 120 144 96"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Rect
        x={45.97561}
        y={45.97561}
        width={164.04877}
        height={164.04877}
        rx={8}
        transform="translate(-53.01934 128) rotate(-45)"
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M88,152v-8a24,24,0,0,1,24-24h56"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default TrafficSign;
