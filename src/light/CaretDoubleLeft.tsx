/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function CaretDoubleLeft(props: IconProps) {
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
        points="200 208 120 128 200 48"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Polyline
        points="120 208 40 128 120 48"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

export default CaretDoubleLeft;
