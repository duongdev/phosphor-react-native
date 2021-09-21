/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polygon, Line, Path, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function Note(props: IconProps) {
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
        points="216 159.992 160 159.992 160 216 216 159.992"
        opacity={0.2}
      />
      <Line
        x1={96}
        y1={96}
        x2={160}
        y2={96}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={96}
        y1={128}
        x2={160}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={96}
        y1={160}
        x2={128}
        y2={160}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M156.68629,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.68629a8,8,0,0,1-2.34315,5.65686l-51.3137,51.3137A8,8,0,0,1,156.68629,216Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="215.28 159.992 160 159.992 160 215.275"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Note;
