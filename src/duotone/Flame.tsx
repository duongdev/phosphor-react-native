/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function Flame(props: IconProps) {
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
        d="M128,24S48,72,48,144a79.98371,79.98371,0,0,0,77.94141,79.948A40.00143,40.00143,0,0,1,88,184c0-40,40-64,40-64s40,24,40,64a40.00143,40.00143,0,0,1-37.94141,39.948A79.98337,79.98337,0,0,0,208,144C208,72,128,24,128,24Z"
        opacity={0.2}
      />
      <Path
        d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Flame;
