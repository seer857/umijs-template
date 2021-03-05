import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/abc/',
  publicPath: '/abc/',
  hash: true,
  //outputPath:'/abc',
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  title: '爱玛大数据平台管理系统',
});
