/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function Book(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path
        d="M48,208a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Polyline
        points="48 208 48 224 192 224"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default Book;
