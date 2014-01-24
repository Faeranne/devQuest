(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  var Actor;

  Actor = (function() {
    function Actor(visible, x, y, image) {
      this.visible = visible;
      this.x = x;
      this.y = y;
      this.image = image;
    }

    return Actor;

  })();

  module.exports.Actor = Actor;

}).call(this);

},{}],2:[function(require,module,exports){
(function() {
  require('./preload');

  window.viewport = require('./viewport');

  window.tile = require('./tile');

  window.actor = require('./actor');

}).call(this);

},{"./actor":1,"./preload":3,"./tile":4,"./viewport":5}],3:[function(require,module,exports){
(function() {
  console.log('change');

}).call(this);

},{}],4:[function(require,module,exports){
(function() {
  var Tile,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Tile = (function() {
    /*
    	#@src: image-like object to source the spritesheet from
    	#@width: width of the tile.
    	#@height: height of the tile.
    	#@sheetX: x position of the tile on the spritesheet (in tiles)
    	#@sheetY: y position of the tile on the spritesheet (in tiles)
    	#@viewport: reference to the viewport the tile is attached to
    */

    function Tile(src, width, height, sheetX, sheetY, viewport) {
      this.src = src;
      this.width = width;
      this.height = height;
      this.sheetX = sheetX;
      this.sheetY = sheetY;
      this.viewport = viewport;
      this.draw = __bind(this.draw, this);
    }

    Tile.prototype.draw = function(x, y) {
      return this.viewport.drawImage(this.src, (this.sheetX - 1) * this.width, (this.sheetY - 1) * this.height, this.width, this.height, x, y);
    };

    return Tile;

  })();

  module.exports.Tile = Tile;

}).call(this);

},{}],5:[function(require,module,exports){
(function() {
  var viewport;

  module.exports = viewport = {};

  viewport.center = {
    x: 0,
    y: 0
  };

  viewport.size = {
    width: 3,
    height: 3
  };

  viewport.tile = {
    width: 32,
    height: 32
  };

  viewport.setCenter = function(x, y) {
    viewport.center.x = x;
    return viewport.center.y = y;
  };

  viewport.setCorner = function(x, y) {
    viewport.center.x = x + (viewport.size.width - 1) / 2;
    return viewport.center.y = y + (viewport.size.height - 1) / 2;
  };

  viewport.setSize = function(w, h) {
    if (!(w % 2) || !(h % 2)) {
      throw new Error('Bad Size');
    }
    viewport.size.width = w;
    return viewport.size.height = h;
  };

  viewport.getViewportX = function(worldX) {
    return worldX - viewport.center.x;
  };

  viewport.getViewportY = function(worldY) {
    return worldY - viewport.center.y;
  };

  viewport.getPixelX = function(x) {
    return ((x - 1) + (viewport.size.width - 1) / 2) * viewport.tile.width;
  };

  viewport.getPixelY = function(y) {
    return ((y - 1) + (viewport.size.height - 1) / 2) * viewport.tile.height;
  };

}).call(this);

},{}]},{},[2])