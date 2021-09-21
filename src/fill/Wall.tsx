/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, G, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function Wall(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <G>
        <Path d="M136,92h96V56a8.00008,8.00008,0,0,0-8-8H136Z" />
        <Rect x={184} y={108} width={48} height={44} />
        <Rect x={88} y={108} width={80} height={44} />
        <Rect x={24} y={108} width={48} height={44} />
        <Path d="M136,168v40h88a8.00008,8.00008,0,0,0,8-8V168Z" />
        <Path d="M120,92V48H32a8.00008,8.00008,0,0,0-8,8V92Z" />
        <Path d="M120,168H24v32a8.00008,8.00008,0,0,0,8,8h88Z" />
      </G>
    </Svg>
  );
}

export default Wall;
