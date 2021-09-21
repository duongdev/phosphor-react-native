/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polygon, Polyline, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function Envelope(props: IconProps) {
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
      <Polygon
        points="224.006 56 128.006 144 32.006 56 224.006 56"
        opacity={0.2}
      />
      <Polyline
        points="224 56 128 144 32 56"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={110.54541}
        y1={128.00013}
        x2={34.4668}
        y2={197.73926}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={221.53418}
        y1={197.73926}
        x2={145.45424}
        y2={127.99964}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Envelope;
