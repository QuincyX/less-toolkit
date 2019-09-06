const path = require('path')

const SELF_MODULE_PATH = path.resolve(__dirname, '..')
var ENTRY_LESS = require.resolve('../src/all.less')

module.exports = class Injector {
  constructor(option) {
    this.option = option
  }
  process(src, extra) {
    if (extra.fileInfo.filename.indexOf(SELF_MODULE_PATH) >= 0) {
      return src
    }
    let ignored = extra.imports.contentsIgnoredChars
    const fileInfo = extra.fileInfo
    console.log('extra.fileInfo.filename', extra.fileInfo.filename)
    const relative = path
      .relative(path.dirname(extra.fileInfo.filename), ENTRY_LESS)
      .replace(/\\/g, '/')
    const injected = relative ? '@import "' + relative + '";\n' : ''
    ignored[fileInfo.filename] = ignored[fileInfo.filename] || 0
    ignored[fileInfo.filename] += injected.length
    console.log('ignored', ignored)

    console.log('injected', injected)

    return injected + src
    return src
  }
}
