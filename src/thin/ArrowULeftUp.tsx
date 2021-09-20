import * as React from 'react';
import Svg, { Rect, Polyline, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowULeftUp(props: IconProps) {
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
        points="136 80 88 32 40 80"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Path
        d="M200,80v88a56,56,0,0,1-56,56h-.00011A55.99988,55.99988,0,0,1,88,168.00011V32"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
    </Svg>
  );
}

export default ArrowULeftUp;
