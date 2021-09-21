/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Ellipse, Line, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function Coin(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Ellipse
        cx={128}
        cy={104}
        rx={104}
        ry={48}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={128}
        y1={152}
        x2={128}
        y2={200}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M24,104v48c0,24,40,48,104,48s104-24,104-48V104"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={192}
        y1={142.10679}
        x2={192}
        y2={190.10744}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={64}
        y1={142.10679}
        x2={64}
        y2={190.10721}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Coin;
