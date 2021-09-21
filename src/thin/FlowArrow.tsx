/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Polyline, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function FlowArrow(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle
        cx={44}
        cy={176}
        r={28}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Polyline
        points="200 40 240 80 200 120"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Path
        d="M72,176h8.00005a48,48,0,0,0,48-48V128A48,48,0,0,1,176,80h64"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
    </Svg>
  );
}

export default FlowArrow;
