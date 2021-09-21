/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/HourglassSimpleMedium';
import duotone from '../duotone/HourglassSimpleMedium';
import fill from '../fill/HourglassSimpleMedium';
import light from '../light/HourglassSimpleMedium';
import regular from '../regular/HourglassSimpleMedium';
import thin from '../thin/HourglassSimpleMedium';

function HourglassSimpleMedium({ weight, color, size, style }: IconProps) {
  const {
    color: contextColor = '#000',
    size: contextSize = 24,
    weight: contextWeight = 'regular',
    style: contextStyle,
  } = useContext(IconContext);

  const IconComponent = useMemo(() => {
    const iconWeight = weight ?? contextWeight;

    const weightMap = {
      bold,
      duotone,
      fill,
      light,
      regular,
      thin,
    };

    return weightMap[iconWeight];
  }, [weight, contextWeight]);

  return (
    <IconComponent
      color={color ?? contextColor}
      size={size ?? contextSize}
      style={{
        ...contextStyle,
        ...style,
      }}
    />
  );
}

export default HourglassSimpleMedium;
