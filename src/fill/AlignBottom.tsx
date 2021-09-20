import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function AlignBottom(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path d="M224.00488,216.00586a8.00008,8.00008,0,0,1-8,8h-176a8,8,0,1,1,0-16h176A8.00008,8.00008,0,0,1,224.00488,216.00586ZM152,192h40a16.01833,16.01833,0,0,0,16-16V80a16.01833,16.01833,0,0,0-16-16H152a16.01833,16.01833,0,0,0-16,16v96A16.01833,16.01833,0,0,0,152,192Zm-88,0h40a16.01833,16.01833,0,0,0,16-16V40a16.01833,16.01833,0,0,0-16-16H64A16.01833,16.01833,0,0,0,48,40V176A16.01833,16.01833,0,0,0,64,192Z" />
    </Svg>
  );
}

export default AlignBottom;
