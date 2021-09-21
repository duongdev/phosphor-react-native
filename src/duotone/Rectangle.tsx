/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

import { IconProps } from '../lib';

function Rectangle(props: IconProps) {
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
        y={48.00005}
        width={192}
        height={160}
        rx={8}
        opacity={0.2}
      />
      <Rect
        x={32.00781}
        y={48.00005}
        width={192}
        height={160}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export default Rectangle;
