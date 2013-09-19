engine = (typeof engine === 'undefined') ? {} : engine;

engine.keyboard = {}
  
engine.keyboard.getValue = function(key){
  switch(key){
    case 38: return 'up';
    case 40: return 'down';
    case 37: return 'left';
    case 39: return 'right';
  }
}

engine.keyboard.parseInput = function(event){
  switch(engine.keyboard.getValue(event.keyCode)){
    case 'up':
      engine.viewport.y--;
      break;
    
    case 'down':
      engine.viewport.y++;
      break;

    case 'left':
      engine.viewport.x--;
      break;

    case 'right':
      engine.viewport.x++;
      break;

  }

  engine.draw();
}

