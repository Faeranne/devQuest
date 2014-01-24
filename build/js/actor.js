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
