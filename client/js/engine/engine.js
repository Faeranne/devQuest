engine = (typeof engine === 'undefined') ? {} : engine;

engine.start = function(x, y){
  window.addEventListener('keydown', engine.keyboard.parseInput, false);
  engine.setViewport('canvas');
  
  engine.map.addMap('init','js/map1.json',true)
  engine.map.addMap('map2','js/map2.json',false)
  engine.map.setXY(x,y)

};

engine.nextLevel = function(){
  engine.map.setXY(22,15)
  engine.map.setMap('map2')
  engine.draw()
}

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
  {id:'rock',src:'images/tiles/rock.png'},          
  {id:'grass',src:'images/tiles/grass.png'},          
  {id:'sand',src:'images/tiles/sand.png'},
  {id:'water',src:'images/tiles/water.png'},
  {id:'sign',src:'images/tiles/sign.png'},
  {id:'blank',src:'images/tiles/water.png'}
]

window.onload = function(){
  engine.assets.preload(assets,function(){
  setTimeout(function(){engine.start(15,13)},2000);
      });
}


window.engine = engine
