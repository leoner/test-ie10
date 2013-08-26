define(function(require, exports, module) {
    var a = require('./a.css')
    var popup = require('popup')

    popup.extend()
    module.exports = function() {
        return 'A simple sample.'
    }
})
