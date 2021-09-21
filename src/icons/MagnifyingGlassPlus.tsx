/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/MagnifyingGlassPlus';
import duotone from '../duotone/MagnifyingGlassPlus';
import fill from '../fill/MagnifyingGlassPlus';
import light from '../light/MagnifyingGlassPlus';
import regular from '../regular/MagnifyingGlassPlus';
import thin from '../thin/MagnifyingGlassPlus';

function MagnifyingGlassPlus({ weight, color, size, style }: IconProps) {
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

export default MagnifyingGlassPlus;
