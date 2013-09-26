engine = (typeof engine === 'undefined') ? {} : engine;

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
  engine.player.draw();
}

var assets = [
  {id:'pd1',src:'images/entities/thomas/d-1.png'},          
  {id:'pd2',src:'images/entities/thomas/d-2.png'},          
  {id:'pd3',src:'images/entities/thomas/d-4.png'},          
  {id:'pr1',src:'images/entities/thomas/r-1.png'},          
  {id:'pr2',src:'images/entities/thomas/r-2.png'},          
  {id:'pr3',src:'images/entities/thomas/r-4.png'},          
  {id:'pl1',src:'images/entities/thomas/l-1.png'},          
  {id:'pl2',src:'images/entities/thomas/l-2.png'},          
  {id:'pl3',src:'images/entities/thomas/l-4.png'},          
  {id:'pu1',src:'images/entities/thomas/u-1.png'},          
  {id:'pu2',src:'images/entities/thomas/u-2.png'},          
  {id:'pu3',src:'images/entities/thomas/u-4.png'},          
  {id:'r',src:'images/tiles/rock.png'},          
  {id:'r',src:'images/tiles/rock.png'},          
  {id:'g',src:'images/tiles/grass.png'},          
  {id:' ',src:'images/tiles/blank.png'}
]

window.onload = function(){
  engine.assets.preload(assets);
}


window.engine = engine
