/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function StripeLogo(props: IconProps) {
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
      <Rect x={40} y={40.00002} width={176} height={176} rx={8} opacity={0.2} />
      <Path
        d="M91.93248,152c0,13.25484,16.148,24,36.06752,24s36.06752-10.74516,36.06752-24c0-32-70.13129-20-70.13129-48,0-13.25483,14.14423-24,34.06377-24,14.93966,0,26.6307,6.04416,31.54249,14.65811"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Rect
        x={40}
        y={40.00002}
        width={176}
        height={176}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export default StripeLogo;
