/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function Medal(props: IconProps) {
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
        cx={127.99414}
        cy={96}
        r={80}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Circle
        cx={128}
        cy={96}
        r={40}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Polyline
        points="176 159.995 176 240 127.993 216 80 240 80 160.002"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default Medal;
