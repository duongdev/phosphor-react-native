/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function Calculator(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Rect
        x={32}
        y={48}
        width={192}
        height={160}
        rx={8}
        transform="translate(256) rotate(90)"
        strokeWidth={24}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Line
        x1={92}
        y1={76}
        x2={164}
        y2={76}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Circle cx={104} cy={128} r={16} />
      <Circle cx={152} cy={128} r={16} />
      <Circle cx={104} cy={176} r={16} />
      <Circle cx={152} cy={176} r={16} />
    </Svg>
  );
}

export default Calculator;
