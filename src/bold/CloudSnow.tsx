/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function CloudSnow(props: IconProps) {
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
        d="M88,96a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,78.37792"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Circle cx={160} cy={216} r={16} fill={props.color} />
      <Circle cx={112} cy={216} r={16} fill={props.color} />
      <Circle cx={64} cy={216} r={16} fill={props.color} />
    </Svg>
  );
}

export default CloudSnow;
