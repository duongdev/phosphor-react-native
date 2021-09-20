import * as React from 'react';
import Svg, { Rect, Polyline, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowURightDown(props: IconProps) {
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
        points="120 176 168 224 216 176"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M56,176V88a56,56,0,0,1,56-56h.00011A55.99988,55.99988,0,0,1,168,87.99989V224"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

export default ArrowURightDown;
