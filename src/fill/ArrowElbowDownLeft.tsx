import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowElbowDownLeft(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path d="M200,32V176a8.00008,8.00008,0,0,1-8,8H104v40a8.00018,8.00018,0,0,1-13.65723,5.65674l-48-48a8,8,0,0,1,0-11.31348l48-48A8.0001,8.0001,0,0,1,104,128v40h80V32a8,8,0,0,1,16,0Z" />
    </Svg>
  );
}

export default ArrowElbowDownLeft;
