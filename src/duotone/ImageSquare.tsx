/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function ImageSquare(props: IconProps) {
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
        d="M40,176V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V160l-.00018-.00018-42.343-42.343a8,8,0,0,0-11.3137,0l-44.6863,44.6863a8,8,0,0,1-11.3137,0l-20.6863-20.6863a8,8,0,0,0-11.3137,0Z"
        opacity={0.2}
      />
      <Rect
        x={40}
        y={40}
        width={176}
        height={176}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M215.99982,159.99982l-42.343-42.343a8,8,0,0,0-11.3137,0l-44.6863,44.6863a8,8,0,0,1-11.3137,0l-20.6863-20.6863a8,8,0,0,0-11.3137,0L40,176"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle cx={100} cy={92} r={12} fill={props.color} />
    </Svg>
  );
}

export default ImageSquare;
