import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import external from 'rollup-plugin-peer-deps-external'
// import json from 'rollup-plugin-json'
// import cleanup from 'rollup-plugin-cleanup'
// import { terser } from 'rollup-plugin-terser'
import analyze from 'rollup-plugin-analyzer'
// import visualizer from 'rollup-plugin-visualizer'

// ----------------------------------------------------------------------------

import pkg from './package.json'

// ----------------------------------------------------------------------------

const deps = Object.keys(pkg.dependencies || {})
const peerDeps = Object.keys(pkg.peerDependencies || {})
const defaultExternal = deps.concat(peerDeps)

// ----------------------------------------------------------------------------

const input = 'src/index.js'

const externals = [
  'react',
  'react-dom',
  'prop-types',
  'rebass',
  'emotion',
  'emotion-theming',
  'styled-components',
  // 'styled-system',
  '@styled-system/css',
  // 'ramda',
  // 'ramda-adjunct',
]

// ----------------------------------------------------------------------------

export default [
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    external: externals,

    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
      }),
      external(),
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      analyze(),
      // visualizer(),
    ],
  },
  {
    input,
    output: {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
    external: externals,

    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
      }),
      external(),
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      analyze(),
      // visualizer(),
    ],
  },
]
