/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function Money(props: IconProps) {
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
        r={32}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle cx={128} cy={128} r={32} opacity={0.2} />
      <Path
        d="M232,64H176l64,56V72A7.99993,7.99993,0,0,0,232,64Z"
        opacity={0.2}
      />
      <Path d="M232,192a7.99993,7.99993,0,0,0,8-8V136l-64,56Z" opacity={0.2} />
      <Path d="M16,72v48L80,64H24A7.99993,7.99993,0,0,0,16,72Z" opacity={0.2} />
      <Path d="M16,184a7.99993,7.99993,0,0,0,8,8H80L16,136Z" opacity={0.2} />
      <Rect
        x={16}
        y={64}
        width={224}
        height={128}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Line
        x1={176}
        y1={64}
        x2={240}
        y2={120}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={176}
        y1={192}
        x2={240}
        y2={136}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={80}
        y1={64}
        x2={16}
        y2={120}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={80}
        y1={192}
        x2={16}
        y2={136}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Money;
