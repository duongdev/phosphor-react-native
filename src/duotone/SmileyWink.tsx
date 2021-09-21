/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Line, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function SmileyWink(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      fill={props.color}
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle cx={92} cy={108} r={12} />
      <Line
        x1={152}
        y1={108}
        x2={176}
        y2={108}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M169.58,151.99735a48.016,48.016,0,0,1-83.15966.00055"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default SmileyWink;
