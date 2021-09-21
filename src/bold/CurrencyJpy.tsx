/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, G, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function CurrencyJpy(props: IconProps) {
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
        x1={80}
        y1={176}
        x2={176}
        y2={176}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={80}
        y1={136}
        x2={176}
        y2={136}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <G>
        <Line
          x1={128}
          y1={136}
          x2={128}
          y2={216}
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={24}
        />
        <Polyline
          points="200 48 128 136 56 48"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={24}
        />
      </G>
    </Svg>
  );
}

export default CurrencyJpy;
