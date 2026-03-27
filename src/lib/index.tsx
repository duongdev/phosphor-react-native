import React, { createContext } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type IconWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'bold'
  | 'fill'
  | 'duotone';

export interface IconProps {
  color?: string;
  duotoneColor?: string;
  duotoneOpacity?: number;
  mirrored?: boolean;
  size?: string | number;
  style?: StyleProp<ViewStyle | TextStyle>;
  testID?: string;
  title?: string; // SVGRProps
  titleId?: string; // SVGRProps
  weight?: IconWeight;
}

export type Icon = React.FC<IconProps>;

export const IconContext = createContext<IconProps>({
  color: '#000',
  size: 24,
  weight: 'regular',
  mirrored: false,
  duotoneOpacity: 0.2,
});
