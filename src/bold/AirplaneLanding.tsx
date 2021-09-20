import * as React from 'react';
import Svg, { Rect, Line, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function AirplaneLanding(props: IconProps) {
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
        x1={96}
        y1={216}
        x2={240}
        y2={216}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Path
        d="M24,103.72927V51.09941a8,8,0,0,1,10.52982-7.58947L48,48,64,78,96,88V51.09941a8,8,0,0,1,10.52982-7.58947L120,48l32,56,48.5646,13.49017A32,32,0,0,1,224,148.32274V184L47.37184,134.54412A32,32,0,0,1,24,103.72927Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default AirplaneLanding;
