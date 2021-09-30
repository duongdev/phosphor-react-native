/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function ChatDots(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256.00098 256.00098"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path
        d="M77.35142,201.87677l-32.2031,27.07116a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H82.49925A8,8,0,0,0,77.35142,201.87677Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Circle cx={128} cy={128} r={10} fill={props.color} />
      <Circle cx={176} cy={128} r={10} fill={props.color} />
      <Circle cx={80} cy={128} r={10} fill={props.color} />
    </Svg>
  );
}

export default ChatDots;
