/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, G, Circle, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function UserRectangle(props: IconProps) {
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
      <G>
        <Circle cx={128} cy={120} r={44} fill={props.color} />
        <Path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40Zm0,160H201.32227a80.03059,80.03059,0,0,0-32.05469-36.50757,59.83658,59.83658,0,0,1-82.53516,0A80.03059,80.03059,0,0,0,54.67773,200H40V56H216l.01025,143.99951Z" />
      </G>
    </Svg>
  );
}

export default UserRectangle;
