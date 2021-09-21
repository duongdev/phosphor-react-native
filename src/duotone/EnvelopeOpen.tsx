/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polygon, Path, Line, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function EnvelopeOpen(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Polygon
        points="224 96 145.455 152 110.545 152 32 96 128 32 224 96"
        opacity={0.2}
      />
      <Path
        d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={110.54541}
        y1={152.00008}
        x2={34.4668}
        y2={205.73921}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={221.53418}
        y1={205.73921}
        x2={145.45424}
        y2={151.99959}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="224 96 145.455 152 110.545 152 32 96"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default EnvelopeOpen;
