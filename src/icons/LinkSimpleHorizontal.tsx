/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/LinkSimpleHorizontal';
import duotone from '../duotone/LinkSimpleHorizontal';
import fill from '../fill/LinkSimpleHorizontal';
import light from '../light/LinkSimpleHorizontal';
import regular from '../regular/LinkSimpleHorizontal';
import thin from '../thin/LinkSimpleHorizontal';

function LinkSimpleHorizontal({ weight, color, size, style }: IconProps) {
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

export default LinkSimpleHorizontal;
