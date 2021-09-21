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
      fill={props.color}
      {...props}
    >
      <G opacity={0.1}>
        <Rect x={0.00244} width={256} height={256} fill="none" />
      </G>
      <Circle cx={128.00244} cy={128} r={96} opacity={0.2} />
      <Circle
        cx={128.00244}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="120.002 120 128.002 120 128.002 176 136.002 176"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle cx={126.00244} cy={84} r={12} />
    </Svg>
  );
}

export default Info;
