import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import external from 'rollup-plugin-peer-deps-external'
import cleanup from 'rollup-plugin-cleanup'
import { terser } from 'rollup-plugin-terser'
import analyze from 'rollup-plugin-analyzer'
import visualizer from 'rollup-plugin-visualizer'

// ----------------------------------------------------------------------------

import pkg from './package.json'

// ----------------------------------------------------------------------------

const input = 'src/index.js'

// ----------------------------------------------------------------------------

export default [
  {
    input,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],

    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      resolve({
        preferBuiltins: true,
      }),
      external(),
      babel({
        exclude: /node_modules/,
        runtimeHelpers: false,
      }),
      commonjs(),
      cleanup(),
      terser(),
      analyze({
        summaryOnly: true,
      }),
      visualizer(),
    ],
  },
]
