/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, G, Path, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function Crosshair(props: IconProps) {
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
        <Path d="M236,120H223.66406A96.15352,96.15352,0,0,0,136,32.33618V20a8,8,0,0,0-16,0V32.33618A96.15352,96.15352,0,0,0,32.33594,120H20a8,8,0,0,0,0,16H32.33594A96.15352,96.15352,0,0,0,120,223.66382V236a8,8,0,0,0,16,0V223.66382A96.15352,96.15352,0,0,0,223.66406,136H236a8,8,0,0,0,0-16Zm-40,16h11.59912A80.14164,80.14164,0,0,1,136,207.59912V196a8,8,0,0,0-16,0v11.59912A80.14164,80.14164,0,0,1,48.40088,136H60a8,8,0,0,0,0-16H48.40088A80.14164,80.14164,0,0,1,120,48.40088V60a8,8,0,0,0,16,0V48.40088A80.14164,80.14164,0,0,1,207.59912,120H196a8,8,0,0,0,0,16Z" />
        <Circle cx={128} cy={128} r={40} />
      </G>
    </Svg>
  );
}

export default Crosshair;
