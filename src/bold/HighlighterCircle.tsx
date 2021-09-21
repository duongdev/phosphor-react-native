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
        strokeWidth={24}
      />
      <Polyline
        points="104 148 104 104 152 80 152 148"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Path
        d="M168,215.29789V156a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v59.29789"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default HighlighterCircle;
