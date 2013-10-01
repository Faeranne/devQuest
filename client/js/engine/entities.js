engine = (typeof engine === 'undefined') ? {} : engine;

engine.entity = function(x,y){
  this.leftStep = true;
  this.moving = false;
  this.x = x
  this.y = y
  this.actions = {}
  this.animations = {}
  this.prototype.setXY = function(x,y){
  
  }
  this.prototype.addAnimation = function(id,spriteList){
    
  }
  this.prototype.addAction = function(id,script){

  }
  this.prototype.move = function(dir){
    
  }
  this.prototype.isVisible = function(x,y){
    return visible;
  }
}

