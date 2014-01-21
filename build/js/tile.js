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
