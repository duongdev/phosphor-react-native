import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function AirplaneTilt(props: IconProps) {
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
        d="M209.53911,80.402,175.88745,112l32,88-24,24-47.80786-69.97929L111.88745,176v24l-24,24L73.695,182.14581,31.88745,168l24-24h24l24-24-72-48,24-24,88,32L175.598,46.46089l-.68109.56855A24,24,0,1,1,208.858,80.97056Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default AirplaneTilt;
