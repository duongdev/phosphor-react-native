/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line, Polygon } from 'react-native-svg';

import { IconProps } from '../lib';

function MonitorPlay(props: IconProps) {
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
      <Path
        d="M208,48H48A16.00016,16.00016,0,0,0,32,64V176a16.00016,16.00016,0,0,0,16,16H208a16.00016,16.00016,0,0,0,16-16V64A16.00016,16.00016,0,0,0,208,48ZM112,152V88l48,32Z"
        opacity={0.2}
      />
      <Rect
        x={32}
        y={48}
        width={192}
        height={144}
        rx={16}
        transform="translate(256 240) rotate(180)"
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Line
        x1={160}
        y1={224}
        x2={96}
        y2={224}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polygon
        points="160 120 112 88 112 152 160 120"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default MonitorPlay;
