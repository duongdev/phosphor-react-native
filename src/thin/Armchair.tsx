/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function Armchair(props: IconProps) {
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
        x1={80}
        y1={136}
        x2={176}
        y2={136}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Path
        d="M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Path
        d="M80,168V128a32,32,0,1,0-32,32v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160a32,32,0,1,0-32-32v40"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
    </Svg>
  );
}

export default Armchair;
