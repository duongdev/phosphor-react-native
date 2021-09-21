/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function Files(props: IconProps) {
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
        d="M176,192h24a8,8,0,0,0,8-8V72L168,32,88,32a8,8,0,0,0-8,8V64l56,0,40,40Z"
        opacity={0.2}
      />
      <Path
        d="M168,224H56a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8l80,0,40,40V216A8,8,0,0,1,168,224Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M80,64V40a8,8,0,0,1,8-8l80,0,40,40V184a8,8,0,0,1-8,8H176"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={88}
        y1={152}
        x2={136}
        y2={152}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={88}
        y1={184}
        x2={136}
        y2={184}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Files;
