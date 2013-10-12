TileEngine = (engine) ->
  tiles = this
  this.engine = engine
  this.sets = {}

  this.setSet = (id,src) ->
    set = tiles.engine.assets.getJson src, (data) ->
      tiles.sets[id]=set
  
  this.getSet = (id) ->
    return tiles.sets[id]
  
  this.getTile = (setId,tileId) ->
    console.log 'got tile'
    set = tiles.getSet setId
    tile = set[tileId]
    image = tiles.engine.images.getImage set.imageId
    image: image
    sx: tile.x
    sy: tile.y
    sw: tile.w
    sh: tile.h

  this.addTileSet = (id,src) ->
    tiles.engine.assets.getJson src, (set) ->
      tiles.sets[id] = set
  
  this.engine.assets.addAssetLoader "tileSet", this.addTileSet

  return this
