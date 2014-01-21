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

  viewport.setCenter = function(x, y) {
    viewport.center.x = x;
    return viewport.center.y = y;
  };

  viewport.setCorner = function(x, y) {
    viewport.center.x = x + (viewport.size.width - 1) / 2;
    return viewport.center.y = y + (viewport.size.height - 1) / 2;
  };

  viewport.setSize = function(w, h) {
    viewport.size.width = w;
    return viewport.size.height = h;
  };

}).call(this);
