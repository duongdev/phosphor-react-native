/* GENERATED FILE */
import * as React from 'react';
import Svg, { G, Rect, Circle, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function Info(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <G opacity={0.1}>
        <Rect x={0.00049} width={256} height={256} fill="none" />
      </G>
      <Circle
        cx={128.00049}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Polyline
        points="120 120 128 120 128 176 136 176"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Circle cx={126.00049} cy={84} r={8} fill={props.color} />
    </Svg>
  );
}

export default Info;
