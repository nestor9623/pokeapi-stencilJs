import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config = {
  namespace: 'pokeapi',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: 'public',
      copy: [
        { src: 'i18n', dest: 'i18n' },
        { src: 'utils', dest: 'utils' }
      ]
    },
  ],
  plugins: [sass()],
  bundles: [
    { components: ['app-home', 'pokemon-list'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]

};


// export const config = {
//   bundles: [
//     { components: ['app-home' , 'app-detail' , 'app-battle']}
//   ],
//   collections: [
//     { name: '@stencil/router'}
//   ]
// }
