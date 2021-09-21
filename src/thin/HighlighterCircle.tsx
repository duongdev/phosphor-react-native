/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Polyline, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function HighlighterCircle(props: IconProps) {
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
        cx={128}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Polyline
        points="104 144 104 96 152 72 152 144"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Path
        d="M168,215.29789V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.29789"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
    </Svg>
  );
}

export default HighlighterCircle;
