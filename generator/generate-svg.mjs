/* global process:readable */

import { fileURLToPath } from 'url';
import { transform } from '@svgr/core';
import path from 'path';
import fs from 'fs-extra';
import Case from 'case';
import chalk from 'chalk';

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
    componentName: componentNameMap[componentName] || componentName,
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
      ['acorn', 'palette', 'pencil-line', 'swap', 'list', 'test-tube'].includes(
        file
      )
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

    let defString = `\
/* GENERATED FILE */
import type { ReactElement, FC } from "react";
import { Path } from 'react-native-svg';
import { type IconWeight } from "../lib";

export default new Map<IconWeight, ReactElement | FC<{ duotoneColor?: string; duotoneOpacity?: number }>>([
${Object.entries(defs)
  .map(
    ([weight, jsx]) =>
      `["${weight}", ${weight === 'duotone' ? '({duotoneColor,duotoneOpacity}: {duotoneColor?: string;duotoneOpacity?: number;}) => ' : ''}(<>${jsx.trim()}</>)]`
  )
  .join(',')}
]);
`;
    // console.log(defString);
    const outDir = path.join(srcDir, 'defs');

    fs.ensureDirSync(outDir);

    fs.writeFileSync(path.join(outDir, `${Case.pascal(icon)}.tsx`), defString);
  });
};

const generateMainIconFile = (icon) => {
  const component = Case.pascal(icon);
  // const componentFileName = fileNameMap[component] || component;
  const componentName = componentNameMap[component] || component;
  const componentCode = `import { type IconProps } from '../lib'

import IconBase from "../lib/icon-base";
import weights from '../defs/${component}'

function ${componentName}({...props }: IconProps) {
  return (<IconBase {...props} weights={weights} />)
}

export default ${componentName}`;

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
    .map(
      (icon) =>
        `export { default as ${Case.pascal(icon)} } from './icons/${Case.pascal(
          icon
        )}';`
    )
    .join('');

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
};

cleanup();
generateAllIconsDefs();
generateAllIconMainFile();
generateIndexFile();
