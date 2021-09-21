/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function PictureInPicture(props: IconProps) {
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
        d="M216,56H40a7.99993,7.99993,0,0,0-8,8V192a7.99993,7.99993,0,0,0,8,8h96V136a7.99993,7.99993,0,0,1,8-8h80V64A7.99993,7.99993,0,0,0,216,56Z"
        opacity={0.2}
      />
      <Rect
        x={32}
        y={56}
        width={192}
        height={144}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M136,200V136a8,8,0,0,1,8-8h80"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default PictureInPicture;
