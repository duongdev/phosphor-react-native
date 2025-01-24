import { useContext, type ReactElement, type FC } from 'react';
import Svg from 'react-native-svg';
import { type IconProps, type IconWeight, IconContext } from '../lib';

interface IconBaseProps extends IconProps {
  weights: Map<
    IconWeight,
    ReactElement | FC<{ duotoneColor?: string; duotoneOpacity?: number }>
  >;
  name: string;
}

function IconBase({
  weight,
  color,
  size,
  style,
  mirrored,
  duotoneColor,
  duotoneOpacity,
  title,
  titleId,
  name,
  weights,
  ...props
}: IconBaseProps) {
  const {
    color: contextColor = '#000',
    size: contextSize = 24,
    weight: contextWeight = 'regular',
    mirrored: contextMirrored = false,
    style: contextStyle,
    duotoneColor: contextDuotoneColor,
    duotoneOpacity: contextDuotoneOpacity = 0.2,
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
      className={`${name}-${weight}__svg-icon-phosphor`}
      testID={props.testID ?? `phosphor-react-native-${name}-${weight}`}
      fill="currentColor"
      viewBox="0 0 256 256"
      width={size ?? contextSize}
      height={size ?? contextSize}
      color={color ?? contextColor}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      {(weight ?? contextWeight) === 'duotone'
        ? // @ts-expect-error not callable
          weights.get(weight ?? contextWeight)({
            duotoneColor: duotoneColor ?? contextDuotoneColor ?? color,
            duotoneOpacity: duotoneOpacity ?? contextDuotoneOpacity,
          })
        : weights.get(weight ?? contextWeight)}
    </Svg>
  );
}

export default IconBase;
