/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Polygon } from 'react-native-svg';

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
      <Circle
        cx={128}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Polygon
        points="144.965 144.971 173.059 82.828 111.024 111.029 85.568 170.426 144.965 144.971"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
    </Svg>
  );
}

export default Compass;
