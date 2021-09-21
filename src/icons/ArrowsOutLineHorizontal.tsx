/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/ArrowsOutLineHorizontal';
import duotone from '../duotone/ArrowsOutLineHorizontal';
import fill from '../fill/ArrowsOutLineHorizontal';
import light from '../light/ArrowsOutLineHorizontal';
import regular from '../regular/ArrowsOutLineHorizontal';
import thin from '../thin/ArrowsOutLineHorizontal';

function ArrowsOutLineHorizontal({ weight, color, size, style }: IconProps) {
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

export default ArrowsOutLineHorizontal;
