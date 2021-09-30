/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function ListBullets(props: IconProps) {
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
        x1={88}
        y1={64}
        x2={216}
        y2={64}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Line
        x1={88.00614}
        y1={128}
        x2={216}
        y2={128}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Line
        x1={88.00614}
        y1={192}
        x2={216}
        y2={192}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Circle cx={44} cy={128} r={8} fill={props.color} />
      <Circle cx={44} cy={64} r={8} fill={props.color} />
      <Circle cx={44} cy={192} r={8} fill={props.color} />
    </Svg>
  );
}

export default ListBullets;
