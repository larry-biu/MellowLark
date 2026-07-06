import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: 'MellowLark - Feishu/Lark Base Visual Comfort Theme',
        'name:zh-CN': 'MellowLark - 飞书多维表格视觉舒适主题',
        namespace: 'https://github.com/larry-biu/MellowLark',
        version: '0.4.0',
        description: 'A visually gentle, low-contrast comfort theme for Lark & Feishu Base. Includes Paper, Mint, and Silver presets. Switch themes instantly via menu or Alt+Shift+E. No data collection, no network requests — CSS only.',
        'description:zh-CN': '为飞书/Lark 多维表格打造的低对比度、柔和视觉舒适主题：包含纸墨、薄荷、云灰三套主题，支持菜单切换、快捷开关、免刷新即时更新。纯 CSS 注入，不收集数据，不请求网络。',
        author: 'Larry',
        homepageURL: 'https://github.com/larry-biu/MellowLark',
        supportURL: 'https://github.com/larry-biu/MellowLark/issues',
        updateURL: 'https://raw.githubusercontent.com/larry-biu/MellowLark/main/dist/feishu-better-theme.user.js',
        downloadURL: 'https://raw.githubusercontent.com/larry-biu/MellowLark/main/dist/feishu-better-theme.user.js',
        match: [
          '*://*.feishu.cn/*',
          '*://*.larksuite.com/*'
        ],
        grant: [
          'GM_registerMenuCommand',
          'GM_unregisterMenuCommand',
          'GM_setValue',
          'GM_getValue'
        ],
        'run-at': 'document-start',
        license: 'MIT'
      },
    }),
  ],
});
