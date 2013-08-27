define(function(require) {

  require('./a.css')

  var popup = require('$')
  // popup.extend({})
  console.info('---->', popup)
  popup('body')
  var b = require('./b')
  b.print()

})
