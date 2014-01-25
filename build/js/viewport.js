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
