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
