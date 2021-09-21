/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Line, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function MusicNotes(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle cx={180} cy={172} r={28} opacity={0.2} />
      <Circle cx={52} cy={204} r={28} opacity={0.2} />
      <Circle
        cx={180}
        cy={172}
        r={28}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle
        cx={52}
        cy={204}
        r={28}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={208}
        y1={80}
        x2={80}
        y2={112}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Polyline
        points="80 204 80 64 208 32 208 172"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default MusicNotes;
