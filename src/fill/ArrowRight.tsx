import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowRight(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path d="M221.65674,133.65723l-72,72A8.00038,8.00038,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8.00037,8.00037,0,0,1,13.65674-5.65723l72,72A8.00034,8.00034,0,0,1,221.65674,133.65723Z" />
    </Svg>
  );
}

export default ArrowRight;
