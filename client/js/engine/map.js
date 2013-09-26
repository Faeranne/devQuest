var engine = (typeof engine === 'undefined') ? {} : engine;

engine.map = {}

engine.map.nullTile = {gid:0,params:{}}
/*
engine.addEventListener('draw',function(e){
  var map = engine.map.current
  var i,j;
  var mapX = mapY = 0;
  var tile;
  var x = e.x-engine.tileWidth/2;
  var y = e.y-engine.tileHeight/2;

  for(j=-1; j < engine.tilesY + 1; j++){
    for(i=-1; i < engine.tilesY + 1; j++){
      mapX = i + x;
      mapY = j + y;
      
      tile = engine.map.getTile(mapX,mapY) || engine.map.nullTile
      
      engine.map.drawTile(mapX,mapY,tile)
    }
  }
})

engine.map.getTile = function(x,y){
  if(engine.map.current.tiles[y]&&engine.map.current.tiles[y][x]){
    var tile = engine.map.current.tiles[y][x]
    return tile
  }else{
    return undefined
  }
}
  
engine.map.drawTile = function(x,y,tile){

  engine.handler.drawImage(engine.map.sheet,x,y,engine.tilew,engine.tileh,tile.x,tile.y,tile.w,tile.h

}
*/

        engine.tile = {};
        engine.tile.images = {};
	engine.map = {}
	engine.map.draw = function()
	{
	  var i,j;
	  var mapX = 0;
	  var mapY = 0;
	  var tile;
	  
	  for(j=-1; j<engine.screen.tilesY+1; j++)
	  {
	    for(i=-1; i<engine.screen.tilesX+1; i++)
	    {
	      mapX = i + engine.viewport.x;
	      mapY = j + engine.viewport.y;

	      tile = engine.map.getTile(mapX,mapY) || {ground:' '}

	      engine.tile.draw(i, j, tile);
	    }
	  }
	};

	engine.map.currentMap = null;

	engine.map.set = function(map){
	  engine.map.currentMap = map;
	}

	engine.map.getTile = function(x,y){
	  if(engine.map.currentMap[y] && engine.map.currentMap[y][x]){
	    return engine.map.currentMap[y][x]
	  }else{
	    return undefined;
	  }
	}

	engine.tile = {};

	engine.tile.offsetX = 0;
	engine.tile.offsetY = 0;
	//engine.tile.images = {};

	engine.tile.draw = function(x, y, tile){

	var rx = x * 16 + engine.tile.offsetX;
	var ry = y * 16 + engine.tile.offsetY;
	

	  engine.handle.drawImage(engine.assets.get(tile.ground), 0, 0, 32, 32, rx, ry, 16, 16);
          if(tile.item){
	    engine.handle.drawImage(engine.assets.get(tile.item), 0, 0, 32, 32, rx, ry, 16, 16);
	  }
	};
/*
	engine.tile.store = function(id, imgSrc){
          var newAsset = engine.assets.loaded.length;
          engine.assets.loaded[newAsset]=false;
	  var tile = [new Image()]
          tile[0].src = imgSrc;
          
	  tile[0].onload = function(){
            engine.assets.loaded[newAsset] = true;
	  }

	  engine.tile.images[id] = tile;
	};

	engine.tile.retrieve = function(id){
	  return engine.tile.images[id][0];
	};*/
