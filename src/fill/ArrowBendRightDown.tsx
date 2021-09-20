import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowBendRightDown(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path d="M205.65723,181.65723l-48,48a8.00181,8.00181,0,0,1-11.31446,0l-48-48A8.00065,8.00065,0,0,1,104,168h40V128A88.09957,88.09957,0,0,0,56,40a8,8,0,0,1,0-16A104.11791,104.11791,0,0,1,160,128v40h40a8.00066,8.00066,0,0,1,5.65723,13.65723Z" />
    </Svg>
  );
}

export default ArrowBendRightDown;
