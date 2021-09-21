/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/FolderNotchMinus';
import duotone from '../duotone/FolderNotchMinus';
import fill from '../fill/FolderNotchMinus';
import light from '../light/FolderNotchMinus';
import regular from '../regular/FolderNotchMinus';
import thin from '../thin/FolderNotchMinus';

function FolderNotchMinus({ weight, color, size, style }: IconProps) {
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

export default FolderNotchMinus;
