const path = require('path')

const SELF_MODULE_PATH = path.resolve(__dirname, '..')
const ENTRY_LESS = require.resolve('../src/all.less')

module.exports = class Injector {
  constructor(option) {
    this.option = option
  }
  process(src, extra) {
    if (extra.fileInfo.filename.indexOf(SELF_MODULE_PATH) >= 0) {
      return src
    }
    if (this.option.extend && this.option.extend.length) {
      if (this.option.extend.includes(extra.fileInfo.filename)) {
        return src
      }
    }
    let ignored = extra.imports.contentsIgnoredChars
    const fileInfo = extra.fileInfo
    const relative = path
      .relative(path.dirname(extra.fileInfo.filename), ENTRY_LESS)
      .replace(/\\/g, '/')
    let injected = relative ? '@import "' + relative + '";\n' : ''
    if (this.option.extend && this.option.extend.length) {
      this.option.extend.forEach(o => {
        const r = path
          .relative(path.dirname(extra.fileInfo.filename), o)
          .replace(/\\/g, '/')
        injected += `@import "${r}";\n`
      })
    }
    ignored[fileInfo.filename] = ignored[fileInfo.filename] || 0
    ignored[fileInfo.filename] += injected.length
    return injected + src
  }
}
