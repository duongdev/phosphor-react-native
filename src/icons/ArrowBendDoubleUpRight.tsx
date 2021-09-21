/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/ArrowBendDoubleUpRight';
import duotone from '../duotone/ArrowBendDoubleUpRight';
import fill from '../fill/ArrowBendDoubleUpRight';
import light from '../light/ArrowBendDoubleUpRight';
import regular from '../regular/ArrowBendDoubleUpRight';
import thin from '../thin/ArrowBendDoubleUpRight';

function ArrowBendDoubleUpRight({ weight, color, size, style }: IconProps) {
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

export default ArrowBendDoubleUpRight;
