/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowElbowUpRight(props: IconProps) {
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
      <Polyline
        points="160 128 208 80 160 32"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="64 224 64 80 208 80"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default ArrowElbowUpRight;
