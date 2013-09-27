engine = (typeof engine === 'undefined') ? {} : engine;

engine.player = {}

engine.player.assets = ['pd1','pd2','pd3','pr1','pr2','pr3','pu1','pu2','pu3','pl1','pl2','pl3'];
engine.player.spriteIndex = 0;
engine.player.offsetX = 0;
engine.player.offsetY = 0;
engine.player.leftLeg = false;

engine.player.activate = function(){
  var x = engine.viewport.x + (engine.screen.tilesX / 2 - 0.5);
  var y = engine.viewport.y + (engine.screen.tilesY / 2 - 0.5);

  switch(engine.player.spriteIndex){
      case 6: y--; break;
      case 3: x++; break;
      case 0: y++; break;
      case 9: x--; break;
  }

  if(engine.map.currentMap.objects[y] && engine.map.currentMap.objects[y][x] && engine.map.currentMap.objects[y][x].toCall != undefined){
    engine.scripts.call[engine.map.currentMap.objects[y][x].toCall](engine.map.currentMap.objects[y][x])
  }
}
    
engine.player.calcLoc = function(){
  var character = {
    width: Math.ceil(engine.assets.get(engine.player.assets[0]).width),
    height: Math.ceil(engine.assets.get(engine.player.assets[0]).height)
  };

  var x = (engine.screen.width / 2) - (character.width / 2);
  var y = (engine.screen.height / 2) + 8 - (character.height);

  return {left: x, top:y};
};

engine.player.draw = function(){
  var loc = engine.player.calcLoc();
  engine.handle.drawImage(engine.assets.get(engine.player.assets[engine.player.spriteIndex]), loc.left, loc.top);
};

engine.player.move = function(direction){
  if(!direction){return};
  var index, x, y

  index = x = y = 0;

  engine.keyboard.canInput = false;

  switch(direction){
    case 'up': index = 6; y=1; break;
    case 'right': index = 3; x=-1; break;
    case 'left': index = 9; x=1; break;
    case 'down': index = 0; y=-1; break;
  }

  if(engine.player.spriteIndex != index){
    engine.player.spriteIndex = index
    engine.keyboard.canInput = true;
    return;
  }

  var toX = engine.viewport.x + (engine.screen.tilesX / 2 - 0.5) - x;
  var toY = engine.viewport.y + (engine.screen.tilesY / 2 - 0.5) - y;

  if(engine.map.currentMap.objects[toY] && engine.map.currentMap.objects[toY][toX] && engine.map.currentMap.objects[toY][toX].block){
    engine.keyboard.canInput = true;
  }else{
    engine.tile.offsetX = x*5;
    engine.tile.offsetY = y*5;

    setTimeout(engine.player.animate, 100);
    setTimeout(engine.player.reset, 200);
  }

  engine.player.spriteIndex = index;
  engine.draw();
}

engine.player.animate = function(){
  var x, y

  x = y = 0;
  switch(engine.player.spriteIndex){
    case 6: y = 11; break;
    case 3: x = -11; break;
    case 9: x = 11; break;
    case 0: y = -11; break;
  }

  engine.player.spriteIndex += (engine.player.leftLeg) ? 1 : 2;
  
  engine.player.leftLeg = !engine.player.leftLeg;

  engine.tile.offsetX = x;
  engine.tile.offsetY = y;

  engine.draw();
};

engine.player.reset = function(){
  var index ,x, y
  x = engine.viewport.x;
  y = engine.viewport.y;
  index = 0;

  switch(engine.player.spriteIndex){
    case 7:
    case 8: y--; index = 6; break;

    case 4:
    case 5:   x++;   index = 3;   break;

    case 1:
    case 2:   y++;   index = 0;   break;

    case 10:
    case 11:   x--;   index = 9;   break;
  }

  engine.viewport.x = x;
  engine.viewport.y = y; 

  engine.keyboard.canInput = true;

  engine.tile.offsetX = 0;
  engine.tile.offsetY = 0;

  engine.player.spriteIndex = index;

  engine.draw();
}
