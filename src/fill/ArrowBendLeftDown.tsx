import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowBendLeftDown(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path d="M208,32a8.00039,8.00039,0,0,1-8,8,88.09957,88.09957,0,0,0-88,88v40h40a8.00066,8.00066,0,0,1,5.65723,13.65723l-48,48a8.00181,8.00181,0,0,1-11.31446,0l-48-48A8.00065,8.00065,0,0,1,56,168H96V128A104.11791,104.11791,0,0,1,200,24,8.00039,8.00039,0,0,1,208,32Z" />
    </Svg>
  );
}

export default ArrowBendLeftDown;
