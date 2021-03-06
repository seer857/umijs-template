import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // base: '/abc/',
  // publicPath: '/abc/',
  // hash: true,
  // outputPath:'/abc',
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/home',
      component: '@/pages/views/home',
      routes: [
        {
          path: '/home/login',
          component: '@/pages/views/index',
        },
        {
          path: '/home/login2',
          component: '@/pages/views/index2',
        },
      ],
    },
  ],
  fastRefresh: {},
  title: '爱玛大数据平台管理系统',
});
