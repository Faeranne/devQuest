engine = (typeof engine === 'undefined') ? {} : engine;
engine.assetsLoad = function(){

	engine.assets = {}

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

        engine.assets.preload = function(assets){
          for(item in assets){
	      engine[assets[item].type].store(assets[item].id,assets[item].src);
	  }
	  while(!engine.assets.done()){
	   var progress = engine.assets.progress();

	   console.log('loading percent: '+progress); 
          }
          return;
        }
}
