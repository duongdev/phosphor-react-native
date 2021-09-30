/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polyline, Path, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function Printer(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Polyline
        points="63.994 80 63.994 40 191.994 40 191.994 80"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Rect
        x={63.99414}
        y={152}
        width={128}
        height={68}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle cx={188} cy={116} r={12} fill={props.color} />
    </Svg>
  );
}

export default Printer;
