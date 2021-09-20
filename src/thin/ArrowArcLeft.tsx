import * as React from 'react';
import Svg, { Rect, Polyline, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowArcLeft(props: IconProps) {
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
        points="92.118 148.118 28.118 148.118 28.118 84.118"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Path
        d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
    </Svg>
  );
}

export default ArrowArcLeft;
