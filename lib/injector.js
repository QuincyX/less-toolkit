const path = require('path')

module.exports = class Injector {
  constructor(option) {
    this.option = option
  }
  process(src, extra) {
    let ignored = extra.imports.contentsIgnoredChars
    const fileInfo = extra.fileInfo
    console.log('extra.fileInfo.filename', extra.fileInfo.filename)
    const relative = path
      .relative(
        extra.fileInfo.filename,
        require.resolve('../src/mixin/all.less')
      )
      .replace(/\\/g, '/')
      .replace('../', '')
    const injected = relative ? '@import "' + relative + '";\n' : ''
    ignored[fileInfo.filename] = ignored[fileInfo.filename] || 0
    ignored[fileInfo.filename] += injected.length
    console.log('ignored', ignored)

    console.log('injected', injected)

    return injected + src
    return src
  }
}
