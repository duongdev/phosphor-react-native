/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function PaintBrushBroad(props: IconProps) {
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
        x1={40}
        y1={112}
        x2={216}
        y2={112}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={176}
        y1={32}
        x2={176}
        y2={72}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Path
        d="M156.59181,152H200a16,16,0,0,0,16-16V32H72A32,32,0,0,0,40,64v72a16,16,0,0,0,16,16H99.40819a8,8,0,0,1,7.97967,8.57L104,208a24,24,0,0,0,48,0l-3.38786-47.43A8,8,0,0,1,156.59181,152Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default PaintBrushBroad;
