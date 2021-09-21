/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function Camera(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      fill={props.color}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path
        d="M208,64H175.99414l-16-24h-64l-16,24H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z"
        opacity={0.2}
      />
      <Path
        d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H79.99414l16-24h64l16,24H208a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle
        cx={128}
        cy={132}
        r={36}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Camera;
