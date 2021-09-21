/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Circle, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function IdentificationBadge(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Rect
        x={32}
        y={48}
        width={192}
        height={160}
        rx={8}
        transform="translate(256) rotate(90)"
        strokeWidth={24}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Line
        x1={96}
        y1={68}
        x2={160}
        y2={68}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Circle
        cx={128}
        cy={136}
        r={32}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Path
        d="M83.99963,187.20785a60.00083,60.00083,0,0,1,88.00067-.00007"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default IdentificationBadge;
