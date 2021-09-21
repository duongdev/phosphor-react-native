/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function Bus(props: IconProps) {
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
        d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192Z"
        opacity={0.3}
      />
      <Path d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192Z" opacity={0.3} />
      <Rect x={42} y={72} width={172} height={48} opacity={0.2} />
      <Line
        x1={42}
        y1={72}
        x2={214}
        y2={72}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={42}
        y1={120}
        x2={214}
        y2={120}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M214,192H42V64A24,24,0,0,1,66,40H190a24,24,0,0,1,24,24Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle cx={84} cy={156} r={12} />
      <Circle cx={172} cy={156} r={12} />
    </Svg>
  );
}

export default Bus;
