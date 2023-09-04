import { BuildEntry, defineBuildConfig } from 'unbuild';

const rollupEntry = (entryDir: string): BuildEntry => {
  const getName = (): string => {
    if (/\-/gi.test(entryDir)) {
      const splittedDirName = entryDir.split(/\-/gi);

      return splittedDirName[0].concat(
        splittedDirName[1].charAt(0).toUpperCase() + splittedDirName[1].slice(1)
      );
    }

    return entryDir;
  };

  return {
    input: `src/${entryDir}/index`,
    name: `${getName()}/index`,
    declaration: false,
    outDir: `dist/${getName()}`,
  };
};

export default defineBuildConfig({
  entries: ['src/index', rollupEntry('type-checks'), rollupEntry('math-utils')],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
