/* 
 * @Author       : Eug
 * @Date         : 2022-03-28 14:57:09
 * @LastEditTime : 2022-03-28 15:12:22
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-vue/build/vitePlugins.ts
 */

// gzip压缩，建议抽离成一个单独的ts文件，这里为了方便直接贴在vite.config.ts文件里
import type { Plugin, PluginOption } from 'vite';
import compressPlugin from 'vite-plugin-compression';
import { writeFileSync } from 'fs'
const { join } = require('path')

// vite gzip 压缩插件
export const configCompressPlugin = (
  compress: 'gzip' | 'brotli' | 'none',
  deleteOriginFile = false
): Plugin | Plugin[]  => {
  const compressList = compress.split(',');

  const plugins: Plugin[] = [];

  if (compressList.includes('gzip')) {
    plugins.push(
      compressPlugin({
        ext: '.gz',
        threshold: 1024,
        deleteOriginFile,
      })
    );
  }

  if (compressList.includes('brotli')) {
    plugins.push(
      compressPlugin({
        ext: '.br',
        algorithm: 'brotliCompress',
        threshold: 1024,
        deleteOriginFile,
      })
    );
  }
  return plugins;
}
// 自定义插件
export const microCustomPlugin = (): PluginOption => {
  let basePath = ''
  return {
    name: "vite:micro-app",
    apply: 'build',
    configResolved(config) {
      basePath = `${config.base}${config.build.assetsDir}/`
    },
    writeBundle(options, bundle) {
      for (const chunkName in bundle) {
        if (Object.prototype.hasOwnProperty.call(bundle, chunkName)) {
          const chunk = bundle[chunkName]
          if (chunk.fileName && chunk.fileName.endsWith('.js')) {
            chunk['code'] = chunk['code'].replace(/(from|import\()(\s*['"])(\.\.?\/)/g, (all, $1, $2, $3) => {
              return all.replace($3, new URL($3, basePath))
            })
            const fullPath = join(options.dir, chunk.fileName)
            writeFileSync(fullPath, chunk['code'])
          }
        }
      }
    },
  }
}