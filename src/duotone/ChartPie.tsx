/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Circle, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function ChartPie(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path
        d="M128,128,44.86156,176l-.01368.00827A96.02522,96.02522,0,0,1,128,32Z"
        opacity={0.2}
      />
      <Circle
        cx={128}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={128}
        y1={128}
        x2={128}
        y2={32}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={211.13844}
        y1={80}
        x2={44.86156}
        y2={176}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default ChartPie;
