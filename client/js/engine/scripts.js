engine = (typeof engine === 'undefined') ? {} : engine;

engine.scripts = {}

engine.scripts.call = {
  tell: function(object){
    alert(object.text);
  },
  nextlevel: function(object){
    engine.nextLevel();
  },
  transition: function(dir,object){
    if(object.direction == dir){
      engine.map.setMap(object.map)
      engine.map.setXY(parseInt(object.x),parseInt(object.y))
      engine.draw()
      return true;
    }
  }
}
