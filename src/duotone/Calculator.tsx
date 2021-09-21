/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';

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
      <Rect x={80} y={64} width={96} height={48} opacity={0.2} />
      <Rect
        x={80}
        y={64}
        width={96}
        height={48}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Rect
        x={31.99995}
        y={48.00781}
        width={192}
        height={160}
        rx={8}
        transform="translate(256.00777 0.00786) rotate(90)"
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Circle cx={88} cy={148} r={12} />
      <Circle cx={128} cy={148} r={12} />
      <Circle cx={168} cy={148} r={12} />
      <Circle cx={88} cy={188} r={12} />
      <Circle cx={128} cy={188} r={12} />
      <Circle cx={168} cy={188} r={12} />
    </Svg>
  );
}

export default Calculator;
