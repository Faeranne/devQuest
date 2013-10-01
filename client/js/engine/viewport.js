engine = (typeof engine === 'undefined') ? {} : engine;

engine.screen = {};

engine.setViewport = function(id){
  engine.canvas = document.getElementById(id);
  engine.handle = engine.canvas.getContext('2d');

  engine.screen.width = engine.canvas.width;
  engine.screen.height = engine.canvas.height;

  engine.screen.tilesX = engine.canvas.width / 16;
  engine.screen.tilesY = engine.canvas.height/ 16;
}

engine.setFullscreen = function(id){
  var elem = document.getElementById(id);
  if(elem.requestFullscreen){
    elem.requestFullscreen();
  }else if(elem.mozRequestFullscreen){
    elem.mozRequestFullscreen();
  }else if(elem.webkitRequestFullscreen){
    elem.webkitRequestFullscreen();
  }
}
engine.viewport = {}
engine.viewport.x = 0;
engine.viewport.y = 0;
