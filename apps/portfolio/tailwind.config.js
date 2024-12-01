const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    flowbite.content({ base: '../../' }),
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
