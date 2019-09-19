# less-toolkit
> Quincy's less 工具包

## 使用方法

### 安装
```shell
npm i @quincyx/less-toolkit -D
```

### 修改 vue.config.js

```javascript
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const qLessToolkit = require('@quincyx/less-toolkit')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        plugins: [
          new qLessToolkit({
            extend: [
              resolve('./src/style/theme.less'),
              resolve('./src/style/mixin.less')
            ]
          })
        ],
        javascriptEnabled: true
      }
    }
  }
}
```
### 配置

`extend`可添加自定义变量和mixin，将覆盖系统默认值
