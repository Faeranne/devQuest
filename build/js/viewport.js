(function() {
  var viewport;

  module.exports = viewport = {};

  viewport.center = {
    x: 0,
    y: 0
  };

  viewport.setCenter = function(x, y) {
    viewport.center.x = x;
    return viewport.center.y = y;
  };

}).call(this);
