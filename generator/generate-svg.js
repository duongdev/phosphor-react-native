const { transform } = require('@svgr/core');
const path = require('path');
const fs = require('fs-extra');
const Case = require('case');
const chalk = require('chalk');

const options = {
  icon: true,
  native: true,
  typescript: true,
  replaceAttrValues: { '#000': '{props.color}' },
  svgProps: {
    width: '{props.size}',
    height: '{props.size}',
  },
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
};

const svgsDir = path.join(
  __dirname,
  '../node_modules/@phosphor-icons/core/assets'
);

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

const fileNameMap = {
  Infinity: 'InfinityIcon',
};

const srcDir = path.join(__dirname, '../src');

const generateIconWithWeight = (icon, weight) => {
  const iconName = weight === 'regular' ? `${icon}` : `${icon}-${weight}`;

  const filePath = path.join(svgsDir, `${weight}/${iconName}.svg`);

  const svgCode = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });

  const componentName = Case.pascal(
    filePath.replace(/^.*\//, '').replace(/\.svg$/, '')
  ).replace(RegExp(`${Case.capital(weight)}$`), '');

  transform(svgCode, options, {
    componentName: componentNameMap[componentName] || componentName,
  }).then((tsCode) => {
    tsCode = tsCode
      .replace(/import type .*;\n/g, '')
      .replace('const', "import { IconProps } from '../lib'\n\nconst")
      .replace('props: SvgProps', 'props: IconProps')
      .replace(' xmlns="http://www.w3.org/2000/svg"', '')
      .replace(
        '<Svg ',
        '<Svg className="' + iconName + '__svg-icon-phosphor" '
      );

    if (weight === 'fill' || weight === 'duotone') {
      tsCode = tsCode.replace('fill="currentColor"', 'fill={props.color}');
    }

    // fix icons with small dots (#4)
    if (tsCode.match(/<Circle.*? \/>/g)) {
      console.log(componentName, weight);

      const circles = tsCode
        .match(/<Circle.*? \/>/g)
        .filter((circle) => !circle.includes('props.color'));

      circles.forEach((circle) => {
        tsCode = tsCode.replace(
          circle,
          circle.replace(/\s\/>$/, ' fill={props.color} />')
        );
      });
    }

    const outDir = path.join(srcDir, weight);
    const fileName = `${fileNameMap[componentName] || componentName}.tsx`;

    fs.ensureDirSync(outDir);

    fs.writeFileSync(
      path.join(outDir, fileName),
      `/* GENERATED FILE */\n${tsCode}`
    );

    console.log(
      `Generated icon ${chalk.blue(icon)} with weight ${chalk.blue(
        weight
      )} to ${chalk.blue(
        path.join(outDir, fileName).replace(`${process.cwd()}/`, '')
      )}`
    );
  });
};

const getIconList = () => {
  const files = fs
    .readdirSync(path.join(svgsDir, 'regular'))
    .filter((file) => file.endsWith('.svg'))
    .map((file) => file.replace(/\.svg$/, ''));

  return files;
};

const generateMainIconFile = (icon) => {
  const component = Case.pascal(icon);
  const componentFileName = fileNameMap[component] || component;
  const componentName = componentNameMap[component] || component;
  const componentCode = `import React, { useContext, useMemo } from 'react'
import { IconProps, IconContext } from '../lib'

import bold from '../bold/${componentFileName}'
import duotone from '../duotone/${componentFileName}'
import fill from '../fill/${componentFileName}'
import light from '../light/${componentFileName}'
import regular from '../regular/${componentFileName}'
import thin from '../thin/${componentFileName}'

function ${componentName}({ weight, color, size, style, mirrored }: IconProps) {
  const {
    color: contextColor = '#000',
    size: contextSize = 24,
    weight: contextWeight = 'regular',
    mirrored: contextMirrored = false,
    style: contextStyle,
  } = useContext(IconContext)

  const IconComponent = useMemo(() => {
    const iconWeight = weight ?? contextWeight

    const weightMap = {
      bold,
      duotone,
      fill,
      light,
      regular,
      thin,
    }

    return weightMap[iconWeight]
  }, [weight, contextWeight])

  const mirroredValue = mirrored ?? contextMirrored

  return (
    <IconComponent
      color={color ?? contextColor}
      size={size ?? contextSize}
      style={[
        contextStyle,
        style,
        {
          ...(mirroredValue && {
            transform: [{ scaleX: -1 }],
          }),
        },
      ]}
    />
  )
}

export default ${componentName}
  `;

  const filePath = path.join(__dirname, '../src/icons', `${component}.tsx`);

  fs.ensureDirSync(path.join(__dirname, '../src/icons'));

  // console.log(template)
  fs.writeFileSync(filePath, `/* GENERATED FILE */\n${componentCode}`);
};

const generateAllIconsByWeight = () => {
  const icons = getIconList();

  console.log(`There are ${chalk.blue(icons.length)} icons`);

  Object.values(weights).forEach((weight) => {
    // fs.rmdirSync(path.join(__dirname, '../src', weight))
  });

  Object.values(weights).forEach((weight) => {
    icons.forEach((icon) => generateIconWithWeight(icon, weight));
  });
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
        `export { default as ${Case.pascal(icon)} } from "./icons/${Case.pascal(
          icon
        )}";`
    )
    .join('\n');

  const fileContent = `/* GENERATED FILE */
export { Icon, IconProps, IconContext, IconWeight } from './lib'

${iconsExport}
  `;

  fs.writeFileSync(path.join(__dirname, '../src', 'index.tsx'), fileContent);
};

const cleanup = () => {
  const folders = [...Object.keys(weights), 'icons'];
  for (let index = 0; index < folders.length; index++) {
    fs.removeSync(srcDir + '/' + folders[index]);
  }
  fs.removeSync(srcDir + '/index.tsx');
};

cleanup();
generateAllIconsByWeight();
generateAllIconMainFile();
generateIndexFile();
