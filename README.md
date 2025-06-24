<img src="/meta/phosphor-mark-tight-yellow.png" width="128" align="right" />

# phosphor-react-native

Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really. Explore all our icons at [phosphoricons.com](https://phosphoricons.com).
Inspired by [phosphor-react](https://github.com/phosphor-icons/phosphor-react).

<table>
<tr>
	<td><img src="/meta/example-regular.png" />
	<td><img src="/meta/example-bold.png" />
	<td><img src="/meta/example-fill.png" />
<tr>
	<td><img src="/meta/example-duotone.png" />
	<td><img src="/meta/example-thin.png" />
	<td><img src="/meta/example-light.png" />
</table>

## Installation

```bash
yarn add phosphor-react-native react-native-svg
```

or

```bash
npm install --save phosphor-react-native react-native-svg
```

## Usage

Simply import the icons you need, and add them anywhere in your render method. Phosphor supports tree-shaking, so your bundle only includes code for the icons you use.

```tsx
import React from 'react';
import { View } from 'react-native';
import { HorseIcon, HeartIcon, CubeIcon } from 'phosphor-react-native';

const App = () => {
  return (
    <View>
      <HorseIcon />
      <HeartIcon color="#AE2983" weight="fill" size={32} />
      <CubeIcon color="teal" weight="duotone" />
    </View>
  );
};
```

### Typescript support
If you get this error...
```
Property 'className' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<Svg> & Pick<Readonly<SvgProps>, "children" | "style" | ... 144 more ... | "fontVariationSettings"> & InexactPartial<...> & InexactPartial<...>'
```
Add this code to your `global.d.ts` file
```ts
import type { SvgProps as DefaultSvgProps } from 'react-native-svg';

declare module 'react-native-svg' {
  interface SvgProps extends DefaultSvgProps {
    className?: string;
  }
}
```

### Props

Icon components accept all props that you can pass to a normal SVG element, including inline `style` objects, `onClick` handlers, and more. The main way of styling them will usually be with the following props:

- **color?**: `string` – Icon stroke/fill color. Can be any CSS color string, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors.
- **size?**: `number | string` – Icon height & width. As with standard React elements, this can be a number, or a string with units in `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`.
- **weight?**: `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"` – Icon weight/style. Can also be used, for example, to "toggle" an icon's state: a rating component could use Stars with `weight="regular"` to denote an empty star, and `weight="fill"` to denote a filled star.
- **mirrored?**: `boolean` – Flip the icon horizontally. Can be useful in RTL languages where normal icon orientation is not appropriate.
- **title?**: `string` – Accessibility label
- **titleId?**: `string` – Accessibility label ID
- **testID?**: `string` – testID for tests
- **duotoneColor?**: `string` – Duotone fill color. Can be any CSS color string, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors. Default value to black.
- **duotoneOpacity?**: `number` – The opacity of the duotoneColor. Default value to 0.2.

### Context

Phosphor takes advantage of React Context to make applying a default style to all icons simple. Create an `IconContext.Provider` at the root of the app (or anywhere above the icons in the tree) and pass in a configuration object with props to be applied by default to all icons:

```tsx
import React from 'react';
import { View } from 'react-native';
import { IconContext, HorseIcon, HeartIcon, CubeIcon } from 'phosphor-react-native';

const App = () => {
  return (
    <IconContext.Provider
      value={{
        color: 'limegreen',
        size: 32,
        weight: 'bold',
      }}
    >
      <View>
        <HorseIcon /> {/* I'm lime-green, 32px, and bold! */}
        <HeartIcon /> {/* Me too! */}
        <CubeIcon /> {/* Me three :) */}
      </View>
    </IconContext.Provider>
  );
};
```

You may create multiple Contexts for styling icons differently in separate regions of an application; icons use the nearest Context above them to determine their style.

### Imports

You may wish to import all icons at once for use in your project, though depending on your bundler this could prevent tree-shaking and make your app's bundle larger.

```tsx
import * as Icon from "phosphor-react-native";
...
<Icon.SmileyIcon />
<Icon.FolderIcon weight="thin" />
<Icon.BatteryHalfIcon size="24px" />
<Icon.AirplaneTakeoffIcon size="24px" mirrored={true} />
```

In cases where tree shaking does not work (resulting in large bundle size), you can import icons individually in this format:

```tsx
// Javascript
import { StarIcon } from "phosphor-react-native/lib/commonjs/icons/Star";

// Typescript
import { StarIcon } from 'phosphor-react-native/src/icons/Star';

<StarIcon size="24px" />
```

## Related Projects

- [phosphor-home](https://github.com/phosphor-icons/phosphor-home) ▲ Phosphor homepage and general info
- [phosphor-react](https://github.com/phosphor-icons/phosphor-react) ▲ Phosphor icon component library for React
- [phosphor-vue](https://github.com/phosphor-icons/phosphor-vue) ▲ Phosphor icon component library for Vue
- [phosphor-icons](https://github.com/phosphor-icons/phosphor-icons) ▲ Phosphor icons for Vanilla JS
- [phosphor-flutter](https://github.com/phosphor-icons/phosphor-flutter) ▲ Phosphor IconData library for Flutter
- [phosphor-webcomponents](https://github.com/phosphor-icons/phosphor-webcomponents) ▲ Phosphor icons as Web Components
- [phosphor-figma](https://github.com/phosphor-icons/phosphor-figma) ▲ Phosphor icons Figma plugin
- [phosphor-sketch](https://github.com/phosphor-icons/phosphor-sketch) ▲ Phosphor icons Sketch plugin

## License

MIT
