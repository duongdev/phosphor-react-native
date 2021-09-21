/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Polygon } from 'react-native-svg';

import { IconProps } from '../lib';

function Airplay(props: IconProps) {
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
        d="M208,48H48A16.00016,16.00016,0,0,0,32,64V176a16.00016,16.00016,0,0,0,16,16h52.57227l27.43017-32,27.42725,32H208a16.00016,16.00016,0,0,0,16-16V64A16.00016,16.00016,0,0,0,208,48Z"
        opacity={0.2}
      />
      <Polygon
        points="128.002 160 176 216 80 216 128.002 160"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M64,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16H192"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Airplay;
