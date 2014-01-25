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
