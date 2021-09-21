/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

import { IconProps } from '../lib';

function Columns(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Rect
        x={-4}
        y={100}
        width={176}
        height={56}
        rx={8}
        transform="translate(212 44) rotate(90)"
        strokeWidth={12}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Rect
        x={84}
        y={100}
        width={176}
        height={56}
        rx={8}
        transform="translate(300 -44) rotate(90)"
        strokeWidth={12}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export default Columns;
