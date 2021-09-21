/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, G, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function QrCode(props: IconProps) {
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
        <Rect x={40.00244} y={40} width={80} height={80} rx={16} />
        <Rect x={40.00244} y={136} width={80} height={80} rx={16} />
        <Rect x={136.00244} y={40} width={80} height={80} rx={16} />
        <Path d="M144.00244,184a8.00039,8.00039,0,0,0,8-8V144a8,8,0,0,0-16,0v32A8.00039,8.00039,0,0,0,144.00244,184Z" />
        <Path d="M208.00244,152h-24v-8a8,8,0,0,0-16,0v56h-24a8,8,0,1,0,0,16h32a8.00039,8.00039,0,0,0,8-8V168h24a8,8,0,0,0,0-16Z" />
        <Path d="M208.00244,184a8.00039,8.00039,0,0,0-8,8v16a8,8,0,0,0,16,0V192A8.00039,8.00039,0,0,0,208.00244,184Z" />
      </G>
    </Svg>
  );
}

export default QrCode;
