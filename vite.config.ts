/*
 * @Author       : Eug
 * @Date         : 2022-03-31 16:16:43
 * @LastEditTime : 2023-05-30 16:37:49
 * @LastEditors  : eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-react/vite.config.ts
 */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'
import { microCustomPlugin } from './build/vitePlugins'
import vitePluginForArco from '@arco-plugins/vite-react'
import viteCompression from 'vite-plugin-compression';

const { resolve, join } = require('path')

const getEnvFn = (mode, target) => {
  return loadEnv(mode, process.cwd())[target]
}
// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  base: `${process.env.NODE_ENV === 'production' ? 'https://eug.asia:8082/' : '/base/developer/'}`,
  plugins: [
    viteCompression(),
    react(),
    microCustomPlugin(),
    createHtmlPlugin({
      inject: {
        data: {
          VITE_APP_TITLE: getEnvFn(mode, 'VITE_APP_TITLE')
        }
      }
    }),
    vitePluginForArco({ style: 'css' })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      views: resolve(__dirname, './src/views'),
      components: resolve(__dirname, './src/components'),
      utils: resolve(__dirname, './src/utils'),
      less: resolve(__dirname, "./src/less"),
      assets: resolve(__dirname, "./src/assets"),
      store: resolve(__dirname, "./src/store"),
      mixins: resolve(__dirname, "./src/mixins")
    },
    extensions: ['.js', '.json', '.ts', '.tsx'], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  server: {
    port: 8082,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': {
        target: 'https://eug.asia/express/api',
        // target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      '/dev_base_api': {
        // target: 'http://127.0.0.1:5000',
        target: 'https://eug.asia/egg/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev_base_api/, '')
      },
      '/dev_han_api': {
        target: 'https://api.vvhan.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev_han_api/, '')
      },
    }
  },
  build: {
    // rollupOptions: {
    //   external: ['vue'],
    //   output: {
    //     globals: {
    //       vue: 'Vue',
    //     },
    //   },
    // },
    assetsDir: 'assets',
    //设置为 false 来禁用将构建后的文件写入磁盘
    write: true,
    //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    emptyOutDir: true,
    //启用/禁用 brotli 压缩大小报告
    // brotliSize: true,
    //chunk 大小警告的限制
    chunkSizeWarningLimit: 1000,
    // 默认情况下，Vite 会在构建阶段将 publicDir 目录中的所有文件复制到 outDir 目录中。可以通过设置该选项为 false 来禁用该行为
    // copyPublicDir: false,
    // 移除console
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // 拆分js
        manualChunks: {
          'lodash-es': ['lodash-es'],
          'acro-design': ['@arco-design/web-react'],
          'acro-design-icon': ['@arco-design/web-react/icon'],
          'react-redux': ['react-redux'],
          'three': ['three'],
          // 'react-dom': ['react-dom'],
          'react-router-dom': ['react-router-dom'],
          'redux': ['redux'],
          // 'react': ['react'],
        }
      }
    }
  },
  // css: {
  //   // [WARNING] "@charset" must be the first rule in the file
  //   postcss: {
  //     plugins: [
  //       {
  //         postcssPlugin: 'internal:charset-removal',
  //         AtRule: {
  //           charset: (atRule) => {
  //             if (atRule.name === 'charset') {
  //               atRule.remove();
  //             }
  //           }
  //         }
  //       }
  //     ],
  //   },
  // },
  //调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
  logLevel: 'info',
  //设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
  clearScreen: true
})
