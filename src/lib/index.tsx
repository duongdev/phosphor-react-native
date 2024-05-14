import React, { ForwardRefExoticComponent, createContext } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';


export type IconWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'bold'
  | 'fill'
  | 'duotone';

export type PaintFunction = (color: string) => React.ReactNode | null;

export interface IconProps extends SvgProps {
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  style?: StyleProp<ViewStyle>;
  mirrored?: boolean;
  'data-testid'?: string;
}


export type Icon = ForwardRefExoticComponent<IconProps>;

export const IconContext = createContext<IconProps>({
  color: '#000',
  size: 24,
  weight: 'regular',
  mirrored: false,
});
