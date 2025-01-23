import React, { createContext } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type IconWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'bold'
  | 'fill'
  | 'duotone';

export interface IconProps {
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  style?: StyleProp<ViewStyle>;
  mirrored?: boolean;
  testID?: string;
  duotoneColor?: string;
  duotoneOpacity?: number;
  title?: string; // SVGRProps
  titleId?: string; // SVGRProps
}

export type Icon = React.FC<IconProps>;

export const IconContext = createContext<IconProps>({
  color: '#000',
  size: 24,
  weight: 'regular',
  mirrored: false,
  duotoneOpacity: 0.2,
});
