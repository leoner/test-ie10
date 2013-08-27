define(function(require, exports, module) {
    var a = require('./a.css')
    var $ = require('$')
console.info('---->', $)
    $('body')
    module.exports = function() {
        return 'A simple sample.'
    }
})
