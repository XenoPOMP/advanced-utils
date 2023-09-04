import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    'src/index',
    {
      input: 'src/type-checks/index',
      name: 'typeChecks',
      declaration: true,
    },

    {
      input: 'src/math-utils/index',
      name: 'mathUtils',
      declaration: true,
    },
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
