/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function InstagramLogo(props: IconProps) {
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
        d="M172,36H84A47.99987,47.99987,0,0,0,36,84v88a47.99988,47.99988,0,0,0,48,48h88a47.99988,47.99988,0,0,0,48-48V84A47.99987,47.99987,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,128,168Z"
        opacity={0.2}
      />
      <Circle
        cx={128}
        cy={128}
        r={40}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={16}
      />
      <Rect
        x={36}
        y={36}
        width={184}
        height={184}
        rx={48}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Circle cx={180} cy={75.99998} r={12} />
    </Svg>
  );
}

export default InstagramLogo;
