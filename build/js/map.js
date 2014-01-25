(function() {
  var Map;

  Map = (function() {
    function Map(width, height, tileWidth, tileHeight) {
      this.width = width;
      this.height = height;
      this.tileWidth = tileWidth;
      this.tileHeight = tileHeight;
      this.tileList = [];
    }

    Map.prototype.addTile = function(animation, x, y) {
      return this.tileList.push(new Tile(animation, x * this.tileWidth, y * this.tileHeight));
    };

    Map.prototype.draw = function() {
      var tile, _i, _len, _ref, _results;
      _ref = this.tileList;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tile = _ref[_i];
        _results.push(this.drawTile(tile));
      }
      return _results;
    };

    Map.prototype.drawTile = function(tile) {
      return this.tileList[tile].draw();
    };

    return Map;

  })();

  module.exports.Map = Map;

}).call(this);
