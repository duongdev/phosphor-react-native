/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polygon, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function CaretDoubleDown(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Polygon points="208 48 128 128 48 48 208 48" opacity={0.2} />
      <Polyline
        points="208 128 128 208 48 128"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polygon
        points="208 48 128 128 48 48 208 48"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default CaretDoubleDown;
