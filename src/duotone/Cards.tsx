/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function Cards(props: IconProps) {
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
      <Rect
        x={32.00781}
        y={80.00005}
        width={160}
        height={128}
        rx={8}
        opacity={0.2}
      />
      <Rect
        x={32.00781}
        y={80.00005}
        width={160}
        height={128}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M64.00781,48.00005h152a8,8,0,0,1,8,8V176"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Cards;
