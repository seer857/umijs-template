# umi project

## 目录结构

### mock 目录
 储存 mock 文件， 此目录下所有 js 和 ts 文件会被解析为mock文件

### src 目录
 源代码目录

##### .umi 目录
 临时文件目录，比如入口文件、路由等，都会被临时生成到这里。不要提交
 .umi目录到 git 仓库，他们会在 umi dev 和 umi build 时 被删除并重新生成。

#### layout/index.tsx
  约定式路由时的全局布局文件

#### pages 目录
  所有路由组件存放在这里

#### app.ts
  运行时配置文件，可以在这里扩展运行时的能力，比如修改路由，修改 render 方法等

### .editorconfig
 编辑器配置文件，详细资料访问：https://editorconfig.org/

### .env 
 环境变量，初始化项目的时候是没有该文件的需要手动添加

### .gitignore
 提交到git服务器时忽略的文件配置

## .prettiergnore
  代码格式化时忽略的文件配置

### .umirc.ts
  umi的配置

### package.json
  包含插件和插件集，以 @umijs/preset- 、@umijs、plugin-、 @umi-preset- 和 umi-plugin-
  开头的依赖会被自动注册为插件或插件集

### .umirc.ts
  配置文件，包含umi内置功能和插件的配置
&emsp;
### dist 目录
 执行 build 后 生成的打包文件
### public 目录
 此目录下所有文件会被 copy 到输出路径


### 几个常用的配置

#### hash 
  取值有两个：true或false，默认是false，即生成的文件后面不包含hash码
  配置是否让生成文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存
### base
 设置路由前缀，通常用于部署到非根目录
### history 
 取值为 json 对象。 默认值为：{type:'browser'}
 type 可选 brower、hash 和 memory
### outPath
 取值字符串，默认为dist
 指定输出路径
### publicPath
 取值为字符串，默认为'/',
 配置 publicPath
### title
 配置标题 


## 路由

umi 里面都是单页面应用。页面地址的跳转都是在浏览器端完成的
不会重新请求服务器获取html
html只在应用初始化时，加载一次。
所有页面由不同的组件构成
页面的切换就是不同组件的切换
只需要在配置中把不同的路由路径和对应的组件关联上

## 路由配置
路由的配置是在routes里面