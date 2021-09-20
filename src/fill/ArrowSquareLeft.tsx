import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowSquareLeft(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path d="M224,207.99414v-160a16.01583,16.01583,0,0,0-16-16H48a16.01583,16.01583,0,0,0-16,16v160a16.01582,16.01582,0,0,0,16,16H208A16.01582,16.01582,0,0,0,224,207.99414ZM116.28125,167.60352,82.35352,133.66016a8.02367,8.02367,0,0,1,0-11.332l33.92773-33.92773a7.99915,7.99915,0,0,1,11.3125,11.3125L107.3125,119.99414H168a8,8,0,1,1,0,16H107.30762L127.59375,156.291a7.99915,7.99915,0,0,1-11.3125,11.3125Z" />
    </Svg>
  );
}

export default ArrowSquareLeft;
