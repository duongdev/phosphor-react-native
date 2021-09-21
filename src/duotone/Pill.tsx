/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function Pill(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      fill={props.color}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path
        d="M112,208A45.25478,45.25478,0,0,1,48,208L48,208A45.25478,45.25478,0,0,1,48,144L96,96l64,64Z"
        opacity={0.2}
      />
      <Rect
        x={14.86292}
        y={82.74517}
        width={226.27417}
        height={90.50967}
        rx={45.25479}
        transform="translate(-53.01934 128) rotate(-45)"
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Line
        x1={96}
        y1={96}
        x2={160}
        y2={160}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={160.06933}
        y1={112.06932}
        x2={184.48528}
        y2={88.48528}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Pill;
