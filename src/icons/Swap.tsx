/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/Swap';
import duotone from '../duotone/Swap';
import fill from '../fill/Swap';
import light from '../light/Swap';
import regular from '../regular/Swap';
import thin from '../thin/Swap';

function Swap({ weight, color, size, style }: IconProps) {
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

export default Swap;
