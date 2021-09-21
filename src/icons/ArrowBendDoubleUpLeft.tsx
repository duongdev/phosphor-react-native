/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/ArrowBendDoubleUpLeft';
import duotone from '../duotone/ArrowBendDoubleUpLeft';
import fill from '../fill/ArrowBendDoubleUpLeft';
import light from '../light/ArrowBendDoubleUpLeft';
import regular from '../regular/ArrowBendDoubleUpLeft';
import thin from '../thin/ArrowBendDoubleUpLeft';

function ArrowBendDoubleUpLeft({ weight, color, size, style }: IconProps) {
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

export default ArrowBendDoubleUpLeft;
