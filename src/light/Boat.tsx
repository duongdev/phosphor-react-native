/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function Boat(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Line
        x1={128}
        y1={48}
        x2={128}
        y2={24}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M224,160c-14.57032,50.99614-82.21424,68.82128-94.18651,71.59963a8.00355,8.00355,0,0,1-3.627,0C114.21424,228.82128,46.57032,210.99614,32,160V125.76607a8,8,0,0,1,5.47018-7.58946l88-29.33334a8.0001,8.0001,0,0,1,5.05964,0l88,29.33334A8,8,0,0,1,224,125.76607Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Line
        x1={128}
        y1={168}
        x2={128}
        y2={88.43274}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

export default Boat;
