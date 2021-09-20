import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/ArrowCounterClockwise';
import duotone from '../duotone/ArrowCounterClockwise';
import fill from '../fill/ArrowCounterClockwise';
import light from '../light/ArrowCounterClockwise';
import regular from '../regular/ArrowCounterClockwise';
import thin from '../thin/ArrowCounterClockwise';

function ArrowCounterClockwise({ weight, color, size, style }: IconProps) {
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

export default ArrowCounterClockwise;
