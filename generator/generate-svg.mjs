/* global process:readable */

import { fileURLToPath } from 'url';
import { transform } from '@svgr/core';
import path from 'path';
import fs from 'fs-extra';
import Case from 'case';
import chalk from 'chalk';
import * as prettier from 'prettier';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  icon: true,
  native: true,
  typescript: false,
  titleProp: false,
  replaceAttrValues: { '#000': '{props.color}' },
  svgProps: {
    width: '{props.size}',
    height: '{props.size}',
  },
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
};

const svgsDir = path.join(__dirname, '../core/assets');

const weights = {
  bold: 'bold',
  duotone: 'duotone',
  fill: 'fill',
  light: 'light',
  regular: 'regular',
  thin: 'thin',
};

const componentNameMap = {
  Circle: 'CircleIcon',
  Path: 'PathIcon',
  Infinity: 'InfinityIcon',
};

// Some duotone colors do not have a color and opacity
const duotoneEscape = ['cell-signal-none', 'wifi-none'];

const srcDir = path.join(__dirname, '../src');

const generateIconsDefs = async (icon, weight) => {
  const iconName = weight === 'regular' ? `${icon}` : `${icon}-${weight}`;

  const filePath = path.join(svgsDir, `${weight}/${iconName}.svg`);

  const svgCode = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });

  const componentName = Case.pascal(
    filePath.replace(/^.*\//, '').replace(/\.svg$/, '')
  ).replace(RegExp(`${Case.capital(weight)}$`), '');

  const tsCode = await transform(svgCode, options, {
    componentName,
  });

  return [...tsCode.matchAll(/<Path.*? \/>/g)]
    .map((m) => m[0])
    .map((p) =>
      p.replaceAll(
        'opacity={0.2}',
        'opacity={duotoneOpacity} fill={duotoneColor}'
      )
    )
    .join('\n');
};

const getIconList = () => {
  const files = fs
    .readdirSync(path.join(svgsDir, 'regular'))
    .filter((file) => file.endsWith('.svg'))
    .map((file) => file.replace(/\.svg$/, ''));

  // We want to generate only a subset for the icons to test
  // yarn generate true
  if (process.argv[2] === 'true') {
    return files.filter((file) =>
      [
        'acorn',
        'palette',
        'pencil-line',
        'swap',
        'list',
        'test-tube',
        '',
      ].includes(file)
    );
  }
  return files;
};

const generateAllIconsDefs = () => {
  const icons = getIconList();

  console.log(`There are ${chalk.blue(icons.length)} icons`);

  icons.forEach(async (icon) => {
    const weightValues = Object.values(weights);
    const defs = {};
    for (let index = 0; index < weightValues.length; index++) {
      const weight = weightValues[index];
      defs[weight] = await generateIconsDefs(icon, weight);
    }

    let defString = await prettier.format(
      `\
/* GENERATED FILE */
import type { ReactElement, FC } from 'react';
import { Path } from 'react-native-svg';
import { type IconWeight } from '../lib';

export default new Map<IconWeight, ReactElement | FC<{ duotoneColor?: string; duotoneOpacity?: number }>>([
${Object.entries(defs)
  .map(
    ([weight, jsx]) =>
      `["${weight}", ${weight === 'duotone' ? (duotoneEscape.includes(icon) ? '() =>' : '({duotoneColor,duotoneOpacity}: {duotoneColor?: string;duotoneOpacity?: number;}) => ') : ''}(<>${jsx.trim()}</>)]`
  )
  .join(',\n')}
]);
`,
      { semi: true, parser: 'babel-ts', singleQuote: true }
    );
    // console.log(defString);
    const outDir = path.join(srcDir, 'defs');

    fs.ensureDirSync(outDir);

    fs.writeFileSync(path.join(outDir, `${Case.pascal(icon)}.tsx`), defString);
  });
};

const generateMainIconFile = (icon) => {
  const component = Case.pascal(icon);
  const componentCode = `import { type Icon, type IconProps } from 'phosphor-react-native'

import IconBase from '../lib/icon-base'
import weights from '../defs/${component}'

const I: Icon = ({...props }: IconProps) => (
  <IconBase {...props} weights={weights} name="${icon}" />
)
${
  componentNameMap[component]
    ? `export { I as ${component}Icon }`
    : `/** @deprecated Use ${component}Icon */
export const ${component} = I
export { I as ${component}Icon }`
}`;

  const filePath = path.join(__dirname, '../src/icons', `${component}.tsx`);

  fs.ensureDirSync(path.join(__dirname, '../src/icons'));

  // console.log(template)
  fs.writeFileSync(filePath, `/* GENERATED FILE */\n${componentCode}`);
};

const generateAllIconMainFile = () => {
  const icons = getIconList();

  icons.forEach((icon) => generateMainIconFile(icon));
};

const generateIndexFile = () => {
  const icons = getIconList();
  const iconsExport = icons
    .map((icon) => `export * from './icons/${Case.pascal(icon)}';`)
    .join('\n');

  const fileContent = `/* GENERATED FILE */
export { type Icon, type IconProps, IconContext, type IconWeight } from './lib';

${iconsExport}
`;

  fs.writeFileSync(path.join(__dirname, '../src', 'index.tsx'), fileContent);
};

const cleanup = () => {
  const folders = ['icons', 'defs'];
  for (let index = 0; index < folders.length; index++) {
    fs.removeSync(srcDir + '/' + folders[index]);
  }
  fs.removeSync(srcDir + '/index.tsx');
  // Clean per-weight dirs
  Object.keys(weights).forEach((w) => {
    fs.removeSync(path.join(srcDir, w));
  });
};

// ─── Per-weight subpath generation ────────────────────────────────────────────

/**
 * Generates src/<weight>/defs/<Component>.tsx — exports a single ReactElement
 * containing just the paths for that weight.
 */
const generateSingleWeightDef = async (icon, weight) => {
  const iconName = weight === 'regular' ? `${icon}` : `${icon}-${weight}`;
  const filePath = path.join(svgsDir, `${weight}/${iconName}.svg`);
  const svgCode = fs.readFileSync(filePath, { encoding: 'utf-8' });
  const componentName = Case.pascal(
    filePath.replace(/^.*\//, '').replace(/\.svg$/, '')
  ).replace(RegExp(`${Case.capital(weight)}$`), '');

  const tsCode = await transform(svgCode, options, { componentName });

  const paths = [...tsCode.matchAll(/<Path.*? \/>/g)]
    .map((m) => m[0])
    .map((p) =>
      p.replaceAll(
        'opacity={0.2}',
        'opacity={duotoneOpacity} fill={duotoneColor}'
      )
    )
    .join('\n');

  const isDuotone = weight === 'duotone';
  const isEscaped = duotoneEscape.includes(icon);

  let defContent;
  if (isDuotone && !isEscaped) {
    defContent = `\
/* GENERATED FILE */
import type { FC } from 'react';
import { Path } from 'react-native-svg';

const paths: FC<{ duotoneColor?: string; duotoneOpacity?: number }> = ({
  duotoneColor,
  duotoneOpacity,
}) => (
  <>
    ${paths.trim()}
  </>
);
export default paths;
`;
  } else {
    defContent = `\
/* GENERATED FILE */
import { Path } from 'react-native-svg';

const paths = (
  <>
    ${paths.trim()}
  </>
);
export default paths;
`;
  }

  return prettier.format(defContent, {
    semi: true,
    parser: 'babel-ts',
    singleQuote: true,
  });
};

const generateSingleWeightIcon = (icon, weight) => {
  const component = Case.pascal(icon);
  const isDuotone = weight === 'duotone';

  // For duotone icons whose def exports a plain ReactElement (no duotone
  // layer), TypeScript narrows `paths` to `never` inside the true branch of
  // `typeof paths === 'function'`.  The double cast `as unknown as FnType`
  // bypasses that narrowing without touching the runtime behaviour.
  const duotoneFnType = `(p: { duotoneColor?: string; duotoneOpacity?: number }) => import('react').ReactElement`;
  const pathsExpr = isDuotone
    ? `(typeof paths === 'function' ? (paths as unknown as ${duotoneFnType})({ duotoneColor: props.duotoneColor, duotoneOpacity: props.duotoneOpacity ?? 0.2 }) : paths) as import('react').ReactElement`
    : `paths`;
  const exports = componentNameMap[component]
    ? `export { I as ${component}Icon };`
    : `/** @deprecated Use ${component}Icon */\nexport const ${component} = I;\nexport { I as ${component}Icon };`;

  return `/* GENERATED FILE */
import type { Icon, IconProps } from '../lib';
import IconBase from '../lib/icon-base-single';
import paths from '../defs/${component}';

const I: Icon = (props: IconProps) => (
  <IconBase
    {...props}
    paths={${pathsExpr}}
    name="${icon}"
  />
);
${exports}
`;
};

const generateAllSingleWeightDirs = () => {
  const icons = getIconList();
  Object.keys(weights).forEach(async (weight) => {
    // Create lib symlink / copy icon-base-single.tsx into weight dir
    const weightLibDir = path.join(srcDir, weight, 'lib');
    fs.ensureDirSync(weightLibDir);
    fs.copySync(
      path.join(srcDir, 'lib', 'icon-base-single.tsx'),
      path.join(weightLibDir, 'icon-base-single.tsx'),
      { overwrite: true }
    );
    // index.tsx for the lib re-exports from parent (no IconWeight — fixed-weight subpath)
    fs.writeFileSync(
      path.join(weightLibDir, 'index.tsx'),
      `export { type Icon, type IconProps, IconContext } from '../../lib';\n`
    );

    // Generate defs + icons
    const defsDir = path.join(srcDir, weight, 'defs');
    const iconsDir = path.join(srcDir, weight, 'icons');
    fs.ensureDirSync(defsDir);
    fs.ensureDirSync(iconsDir);

    for (const icon of icons) {
      const defContent = await generateSingleWeightDef(icon, weight);
      fs.writeFileSync(
        path.join(defsDir, `${Case.pascal(icon)}.tsx`),
        defContent
      );

      const iconContent = generateSingleWeightIcon(icon, weight);
      fs.writeFileSync(
        path.join(iconsDir, `${Case.pascal(icon)}.tsx`),
        iconContent
      );
    }

    // Generate barrel index
    const iconsExport = icons
      .map((icon) => `export * from './icons/${Case.pascal(icon)}';`)
      .join('\n');

    const indexContent = `/* GENERATED FILE */
export { type Icon, type IconProps, IconContext } from './lib';

${iconsExport}
`;
    fs.writeFileSync(path.join(srcDir, weight, 'index.tsx'), indexContent);
    console.log(`Generated per-weight dir: src/${weight}/`);
  });
};

cleanup();
generateAllIconsDefs();
generateAllIconMainFile();
generateIndexFile();
generateAllSingleWeightDirs();
