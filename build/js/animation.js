(function() {
  var Animation;

  Animation = (function() {
    function Animation(viewport, src, sx, sy, width, height, countX, countY) {
      this.viewport = viewport;
      this.src = src;
      this.sx = sx;
      this.sy = sy;
      this.width = width;
      this.height = height;
      this.countX = countX;
      this.countY = countY;
    }

    return Animation;

  })();

  module.exports.Animation = Animation;

}).call(this);
