/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function Cardholder(props: IconProps) {
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
        d="M32,120H88.80976A7.98836,7.98836,0,0,1,96.64,126.39917a32.00785,32.00785,0,0,0,62.7201,0A7.98836,7.98836,0,0,1,167.19024,120H224V72a16,16,0,0,0-16-16H48A16,16,0,0,0,32,72Z"
        opacity={0.2}
      />
      <Rect
        x={32}
        y={56}
        width={192}
        height={144}
        rx={16}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M32,120H88.80976A7.98836,7.98836,0,0,1,96.64,126.39917a32.00785,32.00785,0,0,0,62.7201,0A7.98836,7.98836,0,0,1,167.19024,120H224"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={32}
        y1={88}
        x2={224}
        y2={88}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Cardholder;
