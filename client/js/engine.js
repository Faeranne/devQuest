(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  require('./preload');

  module.exports.viewport = require('./viewport');

}).call(this);

},{"./preload":2,"./viewport":3}],2:[function(require,module,exports){
(function() {
  console.log('change');

}).call(this);

},{}],3:[function(require,module,exports){
(function() {
  var viewport;

  module.exports = viewport = {};

  viewport.center = {
    x: 0,
    y: 0
  };

}).call(this);

},{}]},{},[1])