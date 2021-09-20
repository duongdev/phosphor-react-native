import * as React from 'react';
import Svg, { Rect, Polyline, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowBendDownRight(props: IconProps) {
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
        points="176 104 224 152 176 200"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M32,56a96,96,0,0,0,96,96h96"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default ArrowBendDownRight;
