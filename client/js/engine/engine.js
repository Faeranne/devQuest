engine = (typeof engine === 'undefined') ? {} : engine;

engine.assetsLoad();

engine.start = function(mapData, x, y){
  window.addEventListener('keydown', engine.keyboard.parseInput, false);
  engine.setViewport('canvas');
  engine.viewport.x = x;
  engine.viewport.y = y;
  
  engine.map.set(mapData)

  engine.draw();
};

engine.draw = function(){
  engine.map.draw();
}

var assets = [
  {id:'r',src:'images/tiles/rock.png',type:'tile'},          
  {id:'g',src:'images/tiles/grass.png',type:'tile'},          
  {id:' ',src:'images/tiles/blank.png',type:'tile'}
]

engine.assets.preload(assets);

window.engine = engine
