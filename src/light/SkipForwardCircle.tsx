/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Line, Polygon } from 'react-native-svg';

import { IconProps } from '../lib';

function SkipForwardCircle(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle
        cx={128}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Line
        x1={156}
        y1={96}
        x2={156}
        y2={160}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Polygon
        points="148 128 100 96 100 160 148 128"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

export default SkipForwardCircle;
