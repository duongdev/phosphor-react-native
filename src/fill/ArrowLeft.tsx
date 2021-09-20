import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowLeft(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path d="M224,128a8.00039,8.00039,0,0,1-8,8H120v64a8.00018,8.00018,0,0,1-13.65674,5.65723l-72-72a8.00034,8.00034,0,0,1,0-11.31446l72-72A8.00037,8.00037,0,0,1,120,56v64h96A8.00039,8.00039,0,0,1,224,128Z" />
    </Svg>
  );
}

export default ArrowLeft;
