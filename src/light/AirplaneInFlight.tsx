/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function AirplaneInFlight(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Line
        x1={72}
        y1={216}
        x2={216}
        y2={216}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M26.75225,80H44l20,24H96L83.50994,66.52982A8,8,0,0,1,91.09941,56H108l44,48h56a32,32,0,0,1,32,32v24H63.809a32,32,0,0,1-30.65044-22.80487L19.08963,90.29878A8,8,0,0,1,26.75225,80Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

export default AirplaneInFlight;
