import * as React from 'react';
import Svg, { Rect, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function AlignCenterVertical(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Line
        x1={224.00488}
        y1={128}
        x2={200.00488}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={56.00488}
        y1={128}
        x2={32.00488}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={144.00488}
        y1={128}
        x2={112.00488}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Rect
        x={108}
        y={100}
        width={128}
        height={56}
        rx={8}
        transform="translate(300 -44) rotate(90)"
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Rect
        x={56}
        y={40}
        width={56}
        height={176}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export default AlignCenterVertical;
