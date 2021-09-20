import React, { createContext } from 'react'
import { ViewStyle } from 'react-native'

export type IconWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'bold'
  | 'fill'
  | 'duotone'

export type PaintFunction = (color: string) => React.ReactNode | null

export interface IconProps {
  color?: string
  size?: string | number
  weight?: IconWeight
  style?: ViewStyle
  // mirrored?: boolean
}

type IconComponentProps = IconProps & React.RefAttributes<SVGSVGElement>

export type Icon = React.ForwardRefExoticComponent<IconComponentProps>

export const IconContext = createContext<IconProps>({
  color: '#000',
  size: 24,
  weight: 'regular',
})
