/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Circle, Polyline } from 'react-native-svg';

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
      <Path
        d="M195.88232,60.11774A96.00007,96.00007,0,1,0,88,215.28711V152a8,8,0,0,1,8-8h8V96l48-24v72h8a8,8,0,0,1,8,8v63.28711A96.03847,96.03847,0,0,0,195.88232,60.11774Z"
        opacity={0.2}
      />
      <Circle
        cx={128}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="104 144 104 96 152 72 152 144"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M168,215.29789V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.29789"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default HighlighterCircle;
