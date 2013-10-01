engine = (typeof engine === 'undefined') ? {} : engine;

engine.mobile = {}

engine.mobile.touches = {}

engine.mobile.pad = {}

engine.mobile.startTouch = function(event){
  if(!engine.mobile.pad.active){
    engine.mobile.pad.start=Date.now()
    var touch = event.touches[0]
    engine.mobile.pad.x = touch.clientX;
    engine.mobile.pad.y = touch.clientY;
    engine.mobile.pad.active = true;
    engine.mobile.pad.move = ''
  }else{
    engine.player.activate();
  }
}

engine.mobile.moveTouch = function(event){
  event.preventDefault()
  var touch = event.touches[0];
  var x = touch.clientX - engine.mobile.pad.x;
  var y = touch.clientY - engine.mobile.pad.y;
  if(engine.mobile.pad.active){
  if(Math.abs(x)>Math.abs(y)){
    if(x<0){
      engine.mobile.pad.move = 'left';
    }else{
      engine.mobile.pad.move = 'right';
    }
  }else{
    if(y<0){
      engine.mobile.pad.move = 'up';
    }else{
      engine.mobile.pad.move = 'down';
    }
  }
  }
}


engine.mobile.stopTouch = function(event){
  if(event.changedTouches[0].identifier==0){
    if(engine.mobile.pad.start > Date.now()-500){engine.player.activate()}
    engine.mobile.pad.active = false;
  }
}

engine.mobile.draw = function(){
  if(engine.mobile.pad.active){
    if(engine.keyboard.canInput){
      engine.player.move(engine.mobile.pad.move);
    }
  }
}