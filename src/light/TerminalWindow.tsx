/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polyline, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function TerminalWindow(props: IconProps) {
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
        points="80 96 120 128 80 160"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Line
        x1={135.99414}
        y1={160}
        x2={175.99414}
        y2={160}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Rect
        x={32}
        y={48}
        width={192}
        height={160}
        rx={8.48528}
        strokeWidth={12}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export default TerminalWindow;
