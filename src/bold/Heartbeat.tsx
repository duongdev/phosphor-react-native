/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polyline, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function Heartbeat(props: IconProps) {
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
        points="32 128 72 128 88 104 120 152 136 128 160 128"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Path
        d="M28.13612,88.20841a52.01064,52.01064,0,0,1,99.864-16.24342l-.00019.00008A52.00881,52.00881,0,0,1,228,92c0,68-100,124-100,124s-33.69291-18.868-61.96423-47.99889"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default Heartbeat;
