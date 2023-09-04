import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    'src/index',
    {
      input: 'src/type-checks/index',
      name: 'typeChecks',
      declaration: false,
    },

    {
      input: 'src/math-utils/index',
      name: 'mathUtils',
      declaration: false,
    },
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
