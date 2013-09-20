engine = (typeof engine === 'undefined') ? {} : engine;

engine.keyboard = {}

engine.keyboard.canInput = true;
  
engine.keyboard.getValue = function(key){
  switch(key){
    case 38: return 'up';
    case 40: return 'down';
    case 37: return 'left';
    case 39: return 'right';
  }
}

engine.keyboard.parseInput = function(event){
  if(engine.keyboard.canInput){
   /* switch(engine.keyboard.getValue(event.keyCode)){
      case 'up':
        engine.viewport.y--;
        engine.player.spriteIndex=6;
        break;
    
      case 'down':
        engine.viewport.y++;
        engine.player.spriteIndex=0;
        break;

      case 'left':
        engine.viewport.x--;
        engine.player.spriteIndex=9;
        break;

      case 'right':
        engine.viewport.x++;
        engine.player.spriteIndex=3;
        break;

    }*/
    engine.player.move(engine.keyboard.getValue(event.keyCode));
  }

  engine.draw();
}

