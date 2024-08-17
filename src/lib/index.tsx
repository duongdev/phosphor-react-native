import React, { createContext } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type IconWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'bold'
  | 'fill'
  | 'duotone';

export type PaintFunction = (color: string) => React.ReactNode | null;

interface SVGRProps {
  title?: string;
  titleId?: string;
}

export type IconProps = {
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  style?: StyleProp<ViewStyle>;
  mirrored?: boolean;
  testID?: string;
  duotoneColor?: string;
  duotoneOpacity?: number;
} & SVGRProps;

export type Icon = React.FC<IconProps>;

export const IconContext = createContext<IconProps>({
  color: '#000',
  size: 24,
  weight: 'regular',
  mirrored: false,
  duotoneColor: '#000',
  duotoneOpacity: 0.2,
});
