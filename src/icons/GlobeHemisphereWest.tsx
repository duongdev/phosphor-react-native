/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/GlobeHemisphereWest';
import duotone from '../duotone/GlobeHemisphereWest';
import fill from '../fill/GlobeHemisphereWest';
import light from '../light/GlobeHemisphereWest';
import regular from '../regular/GlobeHemisphereWest';
import thin from '../thin/GlobeHemisphereWest';

function GlobeHemisphereWest({ weight, color, size, style }: IconProps) {
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

export default GlobeHemisphereWest;
