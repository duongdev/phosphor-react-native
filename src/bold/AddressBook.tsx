import * as React from 'react';
import Svg, { Rect, Circle, Line, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function AddressBook(props: IconProps) {
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
        cx={136}
        cy={116}
        r={32}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={32}
        y1={108.00005}
        x2={56}
        y2={108.00005}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={32}
        y1={68.00005}
        x2={56}
        y2={68.00005}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={32}
        y1={148.00005}
        x2={56}
        y2={148.00005}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={32}
        y1={188.00005}
        x2={56}
        y2={188.00005}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Rect
        x={40}
        y={48}
        width={192}
        height={160}
        rx={8}
        transform="translate(264 -8) rotate(90)"
        strokeWidth={24}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M91.99963,167.20785a60.00083,60.00083,0,0,1,88.00067-.00007"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default AddressBook;
