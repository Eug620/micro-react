/*
 * @Author       : Eug
 * @Date         : 2022-03-31 16:16:43
 * @LastEditTime : 2022-04-01 16:33:56
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-react/vite.config.ts
 */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'
import { microCustomPlugin } from './build/vitePlugins'

const getEnvFn = (mode, target) => {
  return loadEnv(mode, process.cwd())[target]
}
// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  base: `${process.env.NODE_ENV === 'production' ? 'http://47.93.229.170:8082/' : '/base/developer/'}`,
  plugins: [
    react(),
    microCustomPlugin(),
    createHtmlPlugin({
      inject: {
        data: {
          VITE_APP_TITLE: getEnvFn(mode, 'VITE_APP_TITLE')
        }
      }
    }),
  ],
  server: {
    port: 8082,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  build: {
    assetsDir: 'assets',
    //设置为 false 来禁用将构建后的文件写入磁盘
    write: true,
    //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    emptyOutDir: true,
    //启用/禁用 brotli 压缩大小报告
    brotliSize: true,
    //chunk 大小警告的限制
    chunkSizeWarningLimit: 1000,
    // 移除console
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  css: {
    // [WARNING] "@charset" must be the first rule in the file
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            }
          }
        }
      ],
    },
  },
  //调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
  logLevel: 'info',
  //设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
  clearScreen: true
})
