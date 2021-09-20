import * as React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function AppWindow(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Rect
        x={32}
        y={48.00586}
        width={192}
        height={160}
        rx={8}
        strokeWidth={8}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Circle cx={68} cy={84.00586} r={8} />
      <Circle cx={108} cy={84.00586} r={8} />
    </Svg>
  );
}

export default AppWindow;
