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

    Actor.prototype.setImage = function(image) {
      return this.image = image;
    };

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
    	#@animation: animation object.
    	#@viewport: reference to the viewport the tile is attached to
    */

    function Tile(animation, x, y) {
      this.animation = animation;
      this.x = x;
      this.y = y;
      this.draw = __bind(this.draw, this);
    }

    Tile.prototype.draw = function() {
      return this.animation.draw(this.x, this.y);
    };

    return Tile;

  })();

  module.exports.Tile = Tile;

}).call(this);

},{}],5:[function(require,module,exports){
(function() {
  var Viewport;

  Viewport = (function() {
    function Viewport(x, y, width, height, dom) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    Viewport.prototype.move = function(x, y) {
      this.x += x;
      return this.y += y;
    };

    Viewport.prototype.set = function(x, y) {
      this.x = x;
      return this.y = y;
    };

    Viewport.prototype.drawImage = function(src, x, y) {
      if (x > this.x && x < this.x + this.width) {
        if (y > this.y && y < this.y + this.height) {
          return this.canvas.drawImage(src.x, src.y, src.w, src.h, x - this.x, y - this.y, src.w, src.h);
        }
      }
    };

    Viewport.prototype.drawViewport = function(src, x, y) {
      return this.canvas.drawImage(src.x, src.y, src.w, src.h, x, y, src.w, src.h);
    };

    return Viewport;

  })();

}).call(this);

},{}]},{},[2])