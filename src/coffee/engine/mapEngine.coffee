MapEngine = (engine) ->
  mapEngine = this
  this.engine = engine
  this.maps = {}
  this.currentMap = '' 
  this.x = 0
  this.y = 0

  this.setMap = (id) ->
    mapEngine.currentMap = id

  this.drawBottomMap = () ->
    for layer in mapEngine.maps[mapEngine.currentMap].bottomLayer
      mapEngine.drawMapLayer(mapEngine.currentMap,layer,0,0)

  this.engine.viewport.setDrawSequence 0,this.drawBottomMap
        
  this.drawMapLayer = (map,layer,x,y) ->
    for row in [0..mapEngine.engine.viewport.height]
      for col in [0..mapEngine.engine.viewport.width]
        if mapEngine.engine.checkObject(layer,row+y,col+x)
          tile = layer[row+y][col+x]
          console.log tile
          image = mapEngine.engine.tiles.getTile(map.tileset,tile)
          console.log "drawing layer"
          mapEngine.engine.viewport.drawImage(image,mapEngine.engine.viewport.xyToViewport(col+x),mapEngine.engine.viewport.xyToViewport(row+y))

  this.addMap = (id,src) ->
    mapEngine.engine.assets.getJson src, (map) ->
      mapEngine.maps[id] = map

  this.engine.assets.addAssetLoader "maps", this.addMap

  return this

