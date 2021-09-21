/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polyline, Polygon } from 'react-native-svg';

import { IconProps } from '../lib';

function MapTrifold(props: IconProps) {
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
        points="96 184 32 200 32 56 96 40"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Polygon
        points="160 216 96 184 96 40 160 72 160 216"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Polyline
        points="160 72 224 56 224 200 160 216"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default MapTrifold;
