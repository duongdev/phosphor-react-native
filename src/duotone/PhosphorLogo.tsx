/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polygon, Line, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function PhosphorLogo(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256.00004"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Polygon points="68 32 68 164 134 164 68 32" opacity={0.2} />
      <Line
        x1={68}
        y1={32}
        x2={134}
        y2={164}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Rect
        x={68}
        y={32}
        width={66}
        height={132}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M134,164v66a66,66,0,0,1-66-66"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M134,164h8a66,66,0,0,0,0-132h-8"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path d="M134,164h8a66,66,0,0,0,0-132h-8Z" opacity={0.2} />
    </Svg>
  );
}

export default PhosphorLogo;
