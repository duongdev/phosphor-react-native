/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function Suitcase(props: IconProps) {
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
        x={32}
        y={72}
        width={192}
        height={144}
        rx={8}
        strokeWidth={12}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

export default Suitcase;
