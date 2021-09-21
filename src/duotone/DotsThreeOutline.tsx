/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function DotsThreeOutline(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle cx={128} cy={128} r={24} opacity={0.1} />
      <Circle cx={48} cy={128} r={24} opacity={0.1} />
      <Circle cx={208} cy={128} r={24} opacity={0.1} />
      <Circle
        cx={128}
        cy={128}
        r={24}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={16}
      />
      <Circle
        cx={48}
        cy={128}
        r={24}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={16}
      />
      <Circle
        cx={208}
        cy={128}
        r={24}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={16}
      />
    </Svg>
  );
}

export default DotsThreeOutline;
