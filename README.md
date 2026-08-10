<img src="/meta/phosphor-mark-tight-yellow.png" width="128" align="right" />

# phosphor-react-native

[![npm version](https://img.shields.io/npm/v/phosphor-react-native.svg)](https://www.npmjs.com/package/phosphor-react-native)
[![npm downloads](https://img.shields.io/npm/dm/phosphor-react-native.svg)](https://www.npmjs.com/package/phosphor-react-native)
[![license](https://img.shields.io/npm/l/phosphor-react-native.svg)](LICENSE)

Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really. Explore all our icons at [phosphoricons.com](https://phosphoricons.com).
Inspired by [@phosphor-icons/react](https://github.com/phosphor-icons/react).

This package ships 1512 icons in 6 weights, generated from [@phosphor-icons/core](https://github.com/phosphor-icons/core).

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

Expo:

```bash
npx expo install phosphor-react-native react-native-svg
```

## Usage

Import the icons you need, and add them anywhere in your render method.

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

### Bundle size

Metro does not tree-shake by default, so the import above pulls **all 1512 icons** into your bundle even if you use three of them. See [#61](https://github.com/duongdev/phosphor-react-native/issues/61).

Two ways to avoid that:

**1. Import each icon directly** — works on every setup, no configuration:

```tsx
import { StarIcon } from 'phosphor-react-native/src/icons/Star';
```

**2. Enable Expo's experimental tree-shaking** — see [the Expo guide](https://docs.expo.dev/guides/tree-shaking/). Then the barrel import is just as small.

Measured with `yarn bundle-bench` (real Metro, iOS, minified, v3.0.5):

| Scenario | Bundle | vs baseline |
| --- | --- | --- |
| Barrel import, 1 icon, no tree-shaking | 8597 kB | +182% |
| Barrel import, 3 icons, no tree-shaking | 8598 kB | +182% |
| Direct import, 1 icon, no tree-shaking | 1876 kB | +10% |
| Barrel import, 1 icon, tree-shaking on | 1854 kB | +10% |

Icons are generated per icon, not per weight, so a single icon always carries all 6 weights.

### Typescript support
If you get this error...
```
Property 'className' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<Svg> & Pick<Readonly<SvgProps>, "children" | "style" | ... 144 more ... | "fontVariationSettings"> & InexactPartial<...> & InexactPartial<...>'
```
Add this code to your `global.d.ts` file
```ts
import 'react-native-svg';
import 'phosphor-react-native';

declare module 'react-native-svg' {
  interface SvgProps {
    className?: string;
  }
}
declare module 'phosphor-react-native' {
  interface IconProps {
    className?: string;
  }
}
```

Module augmentation merges into the existing interface, so declare only the extra members — writing `interface SvgProps extends DefaultSvgProps` makes the type reference itself (`TS2310`).

### Props

Icons are styled with the following props:

- **color?**: `string` – Icon stroke/fill color. Any color string React Native accepts, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors. Default `#000`.
- **size?**: `number | string` – Icon height & width. Default `24`. Use a number, or a percentage string such as `"50%"`. Other unit suffixes are parsed with `parseInt`, so `"24px"` is `24` — but `"2rem"` is also `2`, not 32.
- **weight?**: `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"` – Icon weight/style. Default `regular`. Can also be used, for example, to "toggle" an icon's state: a rating component could use Stars with `weight="regular"` to denote an empty star, and `weight="fill"` to denote a filled star.
- **mirrored?**: `boolean` – Flip the icon horizontally. Default `false`. Can be useful in RTL languages where normal icon orientation is not appropriate.
- **style?**: `StyleProp<ViewStyle | Omit<TextStyle, 'cursor'>>` – Style applied to the underlying `Svg`.
- **title?**: `string` – Accessibility label
- **titleId?**: `string` – Accessibility label ID
- **testID?**: `string` – testID for tests. Falls back to `phosphor-react-native-<name>-<weight>`, where `<weight>` is the weight you passed explicitly.
- **duotoneColor?**: `string` – Fill color of the duotone background layer. Defaults to `color`, so an icon with `color="teal"` gets a teal background layer — not a black one.
- **duotoneOpacity?**: `number` – The opacity of the duotoneColor. Default `0.2`.

`IconProps` is a closed type: props outside this list (`onPress`, `fill`, …) are forwarded to the underlying `Svg` at runtime, but TypeScript rejects them. Widen `IconProps` with [module augmentation](#typescript-support) if you need more.

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

Every styling prop is context-able: `color`, `size`, `weight`, `mirrored`, `style`, `duotoneColor` and `duotoneOpacity`. Props set on an icon win over the Context. Defaults when neither is set: `color: '#000'`, `size: 24`, `weight: 'regular'`, `mirrored: false`, `duotoneOpacity: 0.2`.

You may create multiple Contexts for styling icons differently in separate regions of an application; icons use the nearest Context above them to determine their style.

### Imports

You may wish to import all icons at once for use in your project. Without tree-shaking this pulls every icon into your bundle — see [Bundle size](#bundle-size).

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
import { StarIcon } from 'phosphor-react-native/src/icons/Star';

<StarIcon size={24} />
```

The file name is the icon name in PascalCase (`arrow-left` → `ArrowLeft`), and the export is that name suffixed with `Icon`. `src/icons/*` is the only subpath this package exports — importing from `lib/commonjs/...` fails with `ERR_PACKAGE_PATH_NOT_EXPORTED` on any bundler that honours `exports`, which Metro does by default since React Native 0.79.

### Migrating from v2

Since v3 every icon is exported with an `Icon` suffix: `Horse` → `HorseIcon`. The old names still work but are marked `@deprecated`, except for three whose bare names collide with other identifiers and were removed outright:

| v2 | v3 |
| --- | --- |
| `Circle` | `CircleIcon` |
| `Path` | `PathIcon` |
| `Infinity` | `InfinityIcon` |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the development workflow. A runnable Expo app lives in [`example/`](example). Icons are generated from the `core` git submodule, so start with:

```bash
git submodule update --init --recursive
```

## Related Projects

- [homepage](https://github.com/phosphor-icons/homepage) ▲ Phosphor homepage and general info
- [core](https://github.com/phosphor-icons/core) ▲ Phosphor icon assets, the source this package generates from
- [react](https://github.com/phosphor-icons/react) ▲ Phosphor icon component library for React
- [vue](https://github.com/phosphor-icons/vue) ▲ Phosphor icon component library for Vue
- [web](https://github.com/phosphor-icons/web) ▲ Phosphor icons for Vanilla JS
- [flutter](https://github.com/phosphor-icons/flutter) ▲ Phosphor IconData library for Flutter
- [webcomponents](https://github.com/phosphor-icons/webcomponents) ▲ Phosphor icons as Web Components
- [figma](https://github.com/phosphor-icons/figma) ▲ Phosphor icons Figma plugin
- [sketch](https://github.com/phosphor-icons/sketch) ▲ Phosphor icons Sketch plugin

## License

MIT
