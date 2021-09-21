/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Ellipse, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function Atom(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Ellipse
        cx={128}
        cy={128}
        rx={44}
        ry={116}
        transform="translate(-53.01934 128) rotate(-45)"
        strokeWidth={12}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Ellipse
        cx={128}
        cy={128}
        rx={116}
        ry={44}
        transform="translate(-53.01934 128) rotate(-45)"
        strokeWidth={12}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Circle cx={128} cy={128} r={10} />
    </Svg>
  );
}

export default Atom;
