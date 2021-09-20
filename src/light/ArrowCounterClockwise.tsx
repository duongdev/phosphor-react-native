import * as React from 'react';
import Svg, { Rect, Polyline, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowCounterClockwise(props: IconProps) {
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
        points="79.833 99.716 31.833 99.716 31.833 51.716"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

export default ArrowCounterClockwise;
