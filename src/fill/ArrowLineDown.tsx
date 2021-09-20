import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowLineDown(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path d="M50.34326,117.65283A7.99981,7.99981,0,0,1,56,103.99609h64v-72a8,8,0,0,1,16,0v72h64a7.99981,7.99981,0,0,1,5.65674,13.65674l-72,72a7.99945,7.99945,0,0,1-11.31348,0ZM216,207.99609H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
    </Svg>
  );
}

export default ArrowLineDown;
