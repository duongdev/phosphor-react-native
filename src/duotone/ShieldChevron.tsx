/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function ShieldChevron(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      fill={props.color}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path
        d="M202.40575,172.0837C180.989,212.285,140.7647,227.81955,130.4562,231.23725a7.54755,7.54755,0,0,1-4.9124,0c-10.30857-3.41773-50.53339-18.95246-71.95-59.15443l.00313-.001L128,120l74.40193,52.08167Z"
        opacity={0.2}
      />
      <Path
        d="M40,114.66667V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,226.51683,40,198.682,40,114.66667Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="202.402 172.082 128 120 53.597 172.082"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default ShieldChevron;
