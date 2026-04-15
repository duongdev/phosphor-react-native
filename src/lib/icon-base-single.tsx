import React, { useContext, type ReactElement } from 'react';
import Svg from 'react-native-svg';
import { type IconProps, IconContext } from '../lib';

interface IconBaseSingleProps
  extends Omit<IconProps, 'weight' | 'duotoneColor' | 'duotoneOpacity'> {
  paths: ReactElement;
  name: string;
}

function IconBaseSingle({
  paths,
  color,
  size,
  style,
  mirrored,
  title,
  titleId,
  name,
  ...props
}: IconBaseSingleProps) {
  const {
    color: contextColor = '#000',
    size: contextSize = 24,
    mirrored: contextMirrored = false,
    style: contextStyle,
  } = useContext(IconContext);

  return (
    <Svg
      style={[
        contextStyle,
        style,
        {
          ...((mirrored ?? contextMirrored) && {
            transform: [{ scaleX: -1 }],
          }),
        },
      ]}
      testID={props.testID ?? `phosphor-react-native-${name}`}
      fill="currentColor"
      viewBox="0 0 256 256"
      width={size ?? contextSize}
      height={size ?? contextSize}
      color={color ?? contextColor}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      {paths}
    </Svg>
  );
}

export default React.memo(IconBaseSingle);
