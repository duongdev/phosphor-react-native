/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/ArrowsCounterClockwise';
import duotone from '../duotone/ArrowsCounterClockwise';
import fill from '../fill/ArrowsCounterClockwise';
import light from '../light/ArrowsCounterClockwise';
import regular from '../regular/ArrowsCounterClockwise';
import thin from '../thin/ArrowsCounterClockwise';

function ArrowsCounterClockwise({ weight, color, size, style }: IconProps) {
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

export default ArrowsCounterClockwise;
