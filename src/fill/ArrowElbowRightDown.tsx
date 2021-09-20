import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowElbowRightDown(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path d="M229.65723,165.65674l-48,48a8.00063,8.00063,0,0,1-11.31446,0l-48-48A8.00037,8.00037,0,0,1,128,152h40V72H32a8,8,0,0,1,0-16H176a8.00008,8.00008,0,0,1,8,8v88h40a8.00038,8.00038,0,0,1,5.65723,13.65674Z" />
    </Svg>
  );
}

export default ArrowElbowRightDown;
