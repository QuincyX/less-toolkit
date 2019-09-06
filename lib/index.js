const randomColorList = [
  '#e74c3c',
  '#e67e22',
  '#f1c40f',
  '#1abc9c',
  '#2ecc71',
  '#3498db',
  '#9b59b6'
]

const Injector = require('./injector')

module.exports = class qLessToolkit {
  constructor(option) {
    this.option = option
  }
  install(less, pluginManager, functions) {
    pluginManager.addPreProcessor(new Injector(this.option))
    functions.add('randomColor', function() {
      return randomColorList[
        Math.round(Math.random() * (randomColorList.length - 1))
      ]
    })
  }
}
