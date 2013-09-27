engine = (typeof engine === 'undefined') ? {} : engine;

engine.keyboard = {}

engine.keyboard.canInput = true;
  
engine.keyboard.getValue = function(key){
  switch(key){
    case 38: return 'up';
    case 40: return 'down';
    case 37: return 'left';
    case 39: return 'right';
    case 65: return 'a';
  }
}

engine.keyboard.parseInput = function(event){
  if(engine.keyboard.canInput){
   switch(engine.keyboard.getValue(event.keyCode)){
      case 'up':
      case 'down':
      case 'left':
      case 'right':
        engine.player.move(engine.keyboard.getValue(event.keyCode));
        break;
      case 'a':
        engine.player.activate();
        break;
    }
  }

  engine.draw();
}

