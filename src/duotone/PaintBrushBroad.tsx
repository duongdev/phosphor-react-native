/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function PaintBrushBroad(props: IconProps) {
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
        d="M40,112H216v24a16,16,0,0,1-16,16H153.2241a8,8,0,0,0-7.9196,9.13137L152,208a24,24,0,0,1-48,0l6.69555-46.86862A8,8,0,0,0,102.776,152H56a16,16,0,0,1-16-16Z"
        opacity={0.2}
      />
      <Line
        x1={40}
        y1={112}
        x2={216}
        y2={112}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M102.776,152H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H216V136a16,16,0,0,1-16,16H153.2241a8,8,0,0,0-7.9196,9.13137L152,208a24,24,0,0,1-48,0l6.69555-46.86862A8,8,0,0,0,102.776,152Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={184}
        y1={32}
        x2={184}
        y2={80}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default PaintBrushBroad;
