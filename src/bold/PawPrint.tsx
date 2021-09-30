/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function PawPrint(props: IconProps) {
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
        d="M183.23572,155.85352a43.541,43.541,0,0,1-20.667-25.90381l-.00092.001a35.9985,35.9985,0,0,0-69.13562,0l-.00092-.001a43.541,43.541,0,0,1-20.667,25.90381,32.00736,32.00736,0,0,0,27.72266,57.61767,72.51938,72.51938,0,0,1,55.02612,0,32.00679,32.00679,0,0,0,27.72266-57.61767Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Circle cx={208} cy={104} r={24} fill={props.color} />
      <Circle cx={48} cy={104} r={24} fill={props.color} />
      <Circle cx={96} cy={56} r={24} fill={props.color} />
      <Circle cx={160} cy={56} r={24} fill={props.color} />
    </Svg>
  );
}

export default PawPrint;
