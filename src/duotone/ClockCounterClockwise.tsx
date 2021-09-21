/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Line, Polyline, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ClockCounterClockwise(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle cx={128} cy={128} r={88} opacity={0.2} />
      <Line
        x1={128}
        y1={80}
        x2={128}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={169.56922}
        y1={152}
        x2={128}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="71.833 99.716 31.833 99.716 31.833 59.716"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default ClockCounterClockwise;
