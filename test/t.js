const path = require('path')

const r = path.resolve(__dirname)
let a = '../../../src/mixin/index.less'
console.log(path.posix.normalize(r))
