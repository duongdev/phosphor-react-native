/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polygon, Path, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function Bookmark(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Polygon
        points="191.971 176 127.963 136 63.971 176 63.971 224 127.963 184 191.971 224 191.971 176"
        opacity={0.2}
      />
      <Path
        d="M191.9707,224l-64.0074-40L63.9707,224V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="191.971 176 127.963 136 63.971 176"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Bookmark;
