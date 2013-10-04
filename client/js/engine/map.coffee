engine = (if (typeof engine is "undefined") then {} else engine)
engine.tile = {}
engine.tile.images = {}
engine.map = {}
engine.map.draw = ->
  i = undefined
  j = undefined
  mapX = 0
  mapY = 0
  tile = undefined
  j = -1
  while j < engine.screen.tilesY + 1
    i = -1
    while i < engine.screen.tilesX + 1
      mapX = i + engine.viewport.x
      mapY = j + engine.viewport.y
      tile = engine.map.getTile(mapX, mapY) or ["blank"]
      engine.tile.draw i, j, tile
      i++
    j++

engine.map.currentMap = null
engine.map.setMap = (id) ->
  engine.map.currentMap = engine.map.avalible[id]

engine.map.setXY = (x, y) ->
  engine.viewport.x = x
  engine.viewport.y = y

engine.map.getTile = (x, y) ->
  if engine.map.currentMap.tiles[y] and engine.map.currentMap.tiles[y][x]
    engine.map.currentMap.tiles[y][x]
  else
    `undefined`

engine.map.getObject = (x, y) ->
  if engine.map.currentMap.objects[y] and engine.map.currentMap.objects[y][x]
    engine.map.currentMap.objects[y][x]
  else
    `undefined`

engine.tile = {}
engine.tile.offsetX = 0
engine.tile.offsetY = 0

engine.tile.draw = (x, y, tile) ->
  rx = x * 16 + engine.tile.offsetX
  ry = y * 16 + engine.tile.offsetY
  tile.forEach (tile) ->
    return  if tile is " "
    engine.handle.drawImage engine.assets.get(tile), 0, 0, 32, 32, rx, ry, 16, 16

engine.map.avalible = {}
engine.map.addMap = (id, src, launch) ->
  engine.assets.getJSON src, (response) ->
    engine.map.avalible[id] = response
    if launch
      engine.map.setMap id
      engine.draw()

engine.map.preload = (file) ->
  engine.assets.loaded++
  engine.assets.getJSON file, (maps) ->
    for map in maps
      engine.map.addMap map.id, map.src, map.init
    engine.assets.loaded--

