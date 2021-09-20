import * as React from 'react';
import Svg, { Rect, Polyline, Circle, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function Alarm(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Polyline
        points="128 80 128 128 176 128"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Circle
        cx={128}
        cy={128}
        r={88}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={201.53911}
        y1={20.51977}
        x2={235.48023}
        y2={54.46089}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={20.51977}
        y1={54.46089}
        x2={54.46089}
        y2={20.51977}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default Alarm;
