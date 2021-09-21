/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function SmileyMeh(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle cx={128} cy={128} r={96} opacity={0.2} />
      <Circle
        cx={128}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={16}
      />
      <Line
        x1={88}
        y1={160}
        x2={168}
        y2={160}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle cx={92} cy={108} r={12} />
      <Circle cx={164} cy={108} r={12} />
    </Svg>
  );
}

export default SmileyMeh;
