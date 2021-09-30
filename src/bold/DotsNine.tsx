/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function DotsNine(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle cx={60} cy={60} r={16} fill={props.color} />
      <Circle cx={128} cy={60} r={16} fill={props.color} />
      <Circle cx={196} cy={60} r={16} fill={props.color} />
      <Circle cx={60} cy={128} r={16} fill={props.color} />
      <Circle cx={128} cy={128} r={16} fill={props.color} />
      <Circle cx={196} cy={128} r={16} fill={props.color} />
      <Circle cx={60} cy={196} r={16} fill={props.color} />
      <Circle cx={128} cy={196} r={16} fill={props.color} />
      <Circle cx={196} cy={196} r={16} fill={props.color} />
    </Svg>
  );
}

export default DotsNine;
