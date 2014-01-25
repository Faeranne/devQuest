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
      this.xPlace = 0;
      this.yPlace = 0;
    }

    Animation.prototype.draw = function(x, y) {
      return this.viewport.drawImage(this.src, this.sx + this.xPlace, this.sy + this.yPlace, this.width, this.height, x, y);
    };

    return Animation;

  })();

  module.exports.Animation = Animation;

}).call(this);
