const buble = require('rollup-plugin-buble')
const browserify = require('rollup-plugin-browserify-transform')
const commonjs = require('rollup-plugin-commonjs')
const envify = require('envify')
const markoify = require('markoify')
const nodeResolve = require('rollup-plugin-node-resolve')
const rollup = require('rollup')

export default {
  input: 'src/app.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife',
    moduleName: 'app'
  },
  plugins: [
    browserify(markoify),
    browserify(envify),
    buble({ exclude: 'node_modules/**' }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true,
      preferBuiltins: false,
      extensions: ['.js', '.marko']
    }),
    commonjs({
      include: ['node_modules/**', '**/*.marko', '**/*.js'],
      extensions: ['.js', '.marko']
    })
  ]
};
