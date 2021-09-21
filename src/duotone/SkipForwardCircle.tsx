/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Circle, Polygon, Line } from 'react-native-svg';

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
      <Path
        d="M128,32a96,96,0,1,0,96,96A95.99991,95.99991,0,0,0,128,32ZM100,160V96l48,32Z"
        opacity={0.2}
      />
      <Circle
        cx={128}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={16}
      />
      <Polygon
        points="148 128 100 96 100 160 148 128"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={156}
        y1={96}
        x2={156}
        y2={160}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default SkipForwardCircle;
