/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polygon, Path, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function File(props: IconProps) {
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
      <Polygon points="152 32 152 88 208.008 88 152 32" opacity={0.2} />
      <Path
        d="M200.00039,224H55.99961A7.99981,7.99981,0,0,1,48,216V40a7.99981,7.99981,0,0,1,7.99961-8l96.00312,0L208,88V216A7.99981,7.99981,0,0,1,200.00039,224Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="152 32 152 88 208.008 88"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default File;
