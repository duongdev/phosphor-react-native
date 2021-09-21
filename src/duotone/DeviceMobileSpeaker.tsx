/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function DeviceMobileSpeaker(props: IconProps) {
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
        x={24}
        y={64}
        width={208}
        height={128}
        rx={16}
        transform="translate(256) rotate(90)"
        opacity={0.2}
      />
      <Rect
        x={24}
        y={64}
        width={208}
        height={128}
        rx={16}
        transform="translate(256) rotate(90)"
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Line
        x1={96}
        y1={56}
        x2={160}
        y2={56}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default DeviceMobileSpeaker;
