engine = (typeof engine === 'undefined') ? {} : engine;

engine.assets = {};

engine.assets.loaded = [];
        
engine.assets.done = function(){
  if(!engine.assets.progress()){
    return true;
  }else{
    return false;
  }
}

engine.assets.progress = function(){
  var len = engine.assets.loaded.length;
  var progress = 0;
  for(var i=0; i<len; i++){
    if(engine.assets.loaded[i]){
      progress++;
    }
  }
  return progress;
}

engine.assets.preload = function(assets,cb){
  for(item in assets){
    engine.assets.set(assets[item].id,assets[item].src);
  }
  while(!engine.assets.done()){
   var progress = engine.assets.progress();

   console.log('loading percent: '+progress); 
  }
  cb();
}
       
engine.assets.images = {}

engine.assets.set = function(id,src){
  var newAsset = engine.assets.loaded.length;
  engine.assets.loaded[newAsset]=false;
  var image = new Image()
  image.src = src
  image.onload = function(){
    engine.assets.loaded[newAsset] = true;
  }
  engine.assets.images[id] = image;
}

engine.assets.get = function(id){
  return engine.assets.images[id];
}

