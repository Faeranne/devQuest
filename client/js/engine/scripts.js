engine = (typeof engine === 'undefined') ? {} : engine;

engine.scripts = {}

engine.scripts.call = {
  tell: function(object){
    alert(object.text);
  },
  nextlevel: function(object){
    engine.nextLevel();
  }
}
