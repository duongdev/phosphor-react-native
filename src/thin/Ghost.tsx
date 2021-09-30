/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function Ghost(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle cx={100} cy={116} r={8} fill={props.color} />
      <Circle cx={156} cy={116} r={8} fill={props.color} />
      <Path
        d="M216,216l-29.33333-24-29.33334,24L128,192,98.66667,216,69.33333,192,40,216V120a88,88,0,0,1,176,0Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
    </Svg>
  );
}

export default Ghost;
