/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function Bird(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle cx={160} cy={72} r={16} />
      <Path
        d="M208,96v24a96,96,0,0,1-96,96H12L104,96V76A52.00738,52.00738,0,0,1,206.33275,62.88778L232,80Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={90.66667}
        y1={176}
        x2={121.33333}
        y2={136}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default Bird;
