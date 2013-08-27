define(function(require) {

  require('./a.css')

  var popup = require('popup')
  popup.extend({})
  var b = require('./b')
  b.print()

})
