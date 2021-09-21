/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polygon, Path, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function CheckSquareOffset(props: IconProps) {
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
        points="44 44 44 196 60 212 212 212 212 44 44 44"
        opacity={0.2}
      />
      <Path
        d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="128 152 64 216 32 184"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default CheckSquareOffset;
