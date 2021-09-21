/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polygon, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function Stack(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Polygon points="32 80 128 136 224 80 128 24 32 80" opacity={0.2} />
      <Polyline
        points="32 176 128 232 224 176"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="32 128 128 184 224 128"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polygon
        points="32 80 128 136 224 80 128 24 32 80"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Stack;
