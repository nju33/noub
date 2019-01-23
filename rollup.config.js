import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

// iife-dist/module.js → noub.js...
// [!] (commonjs plugin) SyntaxError: Binding eval in strict mode (430:13) in /Users/nju33/nju33/noub/node_modules/yamlparser/yamlparser.js
// node_modules/yamlparser/yamlparser.js (430:13)
// 428:     }
// 429:
// 430:     function eval(str) {
//                   ^
// 431:         errors = [];
// 432:         reference_blocks = [];

export default {
  input: 'iife-dist/module.js',
  output: {
    file: 'noub.js',
    format: 'iife',
    name: 'Noub'
  },
  plugins: [
    json(),
    resolve(),
    commonjs(),
  ]
};
