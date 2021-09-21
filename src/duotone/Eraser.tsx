/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function Eraser(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256.00098 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path
        d="M111.03042,215.83347H72.07L34.98164,178.74517a16,16,0,0,1,0-22.62742L91.55018,99.54921l67.88225,67.88225Z"
        opacity={0.2}
      />
      <Line
        x1={91.55018}
        y1={99.54921}
        x2={159.43243}
        y2={167.43146}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M216.00049,215.83348H72.07L34.98164,178.74517a16,16,0,0,1,0-22.62742L148.11873,42.98066a16,16,0,0,1,22.62741,0L216.001,88.2355a16,16,0,0,1,0,22.62742L111.03042,215.83347"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Eraser;
