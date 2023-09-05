import { BuildEntry, defineBuildConfig } from 'unbuild';

import { toCamelCase } from './src/string';

const rollupEntry = (entryDir: string): BuildEntry => {
  const getName = (): string => {
    return toCamelCase(entryDir);
  };

  return {
    input: `src/${entryDir}/index`,
    name: `${getName()}`,
    declaration: false,
    // outDir: `dist/${getName()}`,
  };
};

export default defineBuildConfig({
  entries: [
    'src/index',
    // rollupEntry('type-checks'),
    // rollupEntry('math-utils'),
    // rollupEntry('string'),
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
