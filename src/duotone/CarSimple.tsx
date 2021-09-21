/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function CarSimple(props: IconProps) {
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
        d="M32,120,61.88849,52.75089A8,8,0,0,1,69.199,48H186.801a8,8,0,0,1,7.31049,4.75089L224,120Z"
        opacity={0.2}
      />
      <Line
        x1={16}
        y1={120}
        x2={240}
        y2={120}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.88849,52.75089A8,8,0,0,1,69.199,48H186.801a8,8,0,0,1,7.31049,4.75089L224,120v88A8,8,0,0,1,216,216Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default CarSimple;
