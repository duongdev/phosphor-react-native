/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Circle, Polygon } from 'react-native-svg';

import { IconProps } from '../lib';

function Compass(props: IconProps) {
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
        d="M128,32a96,96,0,1,0,96,96A95.99991,95.99991,0,0,0,128,32Zm16.9646,112.9707-59.397,25.45557,25.45606-59.397,62.0354-28.20069Z"
        opacity={0.2}
      />
      <Circle
        cx={128}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={16}
      />
      <Polygon
        points="144.965 144.971 173.059 82.828 111.024 111.029 85.568 170.426 144.965 144.971"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Compass;
