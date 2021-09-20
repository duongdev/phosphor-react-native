import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowCircleRight(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm47.38477,107.05469a7.99866,7.99866,0,0,1-1.73829,2.61133l-33.92773,33.92773a7.99915,7.99915,0,0,1-11.3125-11.3125L148.6875,136H88a8,8,0,0,1,0-16h60.6875L128.40625,99.71875a7.99915,7.99915,0,0,1,11.3125-11.3125L173.64648,122.334a8.02367,8.02367,0,0,1,1.73829,8.72071Z" />
    </Svg>
  );
}

export default ArrowCircleRight;
