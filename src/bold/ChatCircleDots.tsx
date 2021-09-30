/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function ChatCircleDots(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path
        d="M45.42853,176.99811A95.95978,95.95978,0,1,1,79.00228,210.5717l.00023-.001L45.84594,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Circle cx={99.99951} cy={127.99902} r={16} fill={props.color} />
      <Circle cx={155.99951} cy={127.99902} r={16} fill={props.color} />
    </Svg>
  );
}

export default ChatCircleDots;
