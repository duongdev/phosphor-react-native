/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/DotsThreeCircleVertical';
import duotone from '../duotone/DotsThreeCircleVertical';
import fill from '../fill/DotsThreeCircleVertical';
import light from '../light/DotsThreeCircleVertical';
import regular from '../regular/DotsThreeCircleVertical';
import thin from '../thin/DotsThreeCircleVertical';

function DotsThreeCircleVertical({ weight, color, size, style }: IconProps) {
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

export default DotsThreeCircleVertical;
