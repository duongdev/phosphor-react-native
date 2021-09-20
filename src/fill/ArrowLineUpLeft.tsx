import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowLineUpLeft(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path d="M56,156V56a8.00008,8.00008,0,0,1,8-8H164a8.0001,8.0001,0,0,1,5.65723,13.65674L125.31348,106l56.34375,56.34326a8.00018,8.00018,0,0,1-11.31446,11.31348L114,117.31372l-44.34277,44.343A8.0001,8.0001,0,0,1,56,156Zm160,51.99609H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
    </Svg>
  );
}

export default ArrowLineUpLeft;
