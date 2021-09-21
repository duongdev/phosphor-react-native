/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/MagnifyingGlassMinus';
import duotone from '../duotone/MagnifyingGlassMinus';
import fill from '../fill/MagnifyingGlassMinus';
import light from '../light/MagnifyingGlassMinus';
import regular from '../regular/MagnifyingGlassMinus';
import thin from '../thin/MagnifyingGlassMinus';

function MagnifyingGlassMinus({ weight, color, size, style }: IconProps) {
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

export default MagnifyingGlassMinus;
