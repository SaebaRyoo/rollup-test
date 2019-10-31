import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: `dist/${pkg.name}.js`,
      format: 'cjs'
    },
    {
      file: `dist/${pkg.name}.es.js`,
      format: 'esm'
    }
  ],
  external: ['react', 'react-dom'], // 指出外部模块，被指定的库不会与自己的库打包在一起
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      clean: true
    }),
    resolve({
      customResolveOptions: {
        // 将自定义选项传递给解析插件
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs()
  ] // 查找外部模块
};
