/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polygon, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function CaretDoubleUp(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Polygon points="48 208 128 128 208 208 48 208" opacity={0.2} />
      <Polygon
        points="48 208 128 128 208 208 48 208"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="48 128 128 48 208 128"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default CaretDoubleUp;
