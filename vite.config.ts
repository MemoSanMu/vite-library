/*
 * @Descripttion:
 * @version:
 * @Author: wangsen
 * @Date: 2021-10-11 11:47:40
 * @LastEditors: wangsen
 * @LastEditTime: 2021-10-11 12:53:37
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import createImportPlugin from 'vite-plugin-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createImportPlugin({
      onlyBuild: false,
      babelImportPluginOptions: [
        {
          libraryName: '@yh/yh-design',
          libraryDirectory: 'es',
          camel2DashComponentName: false,
          style: 'css',
        },
      ],
    }),
  ],
});
