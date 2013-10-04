engine = (if (typeof engine is "undefined") then {} else engine)
engine.player = {}
engine.player.assets = ["pd1", "pd2", "pd3", "pr1", "pr2", "pr3", "pu1", "pu2", "pu3", "pl1", "pl2", "pl3"]
engine.player.spriteIndex = 0
engine.player.offsetX = 0
engine.player.offsetY = 0
engine.player.leftLeg = false
engine.player.activate = ->
  x = engine.viewport.x + (engine.screen.tilesX / 2 - 0.5)
  y = engine.viewport.y + (engine.screen.tilesY / 2 - 0.5)
  switch engine.player.spriteIndex
    when 6
      y--
    when 3
      x++
    when 0
      y++
    when 9
      x--
  engine.scripts.call[engine.map.currentMap.objects[y][x].toCall] engine.map.currentMap.objects[y][x]  if engine.map.currentMap.objects[y] and engine.map.currentMap.objects[y][x] and engine.map.currentMap.objects[y][x].toCall isnt `undefined`

engine.player.calcLoc = ->
  character =
    width: Math.ceil(engine.assets.get(engine.player.assets[0]).width)
    height: Math.ceil(engine.assets.get(engine.player.assets[0]).height)

  x = (engine.screen.width / 2) - (character.width / 2)
  y = (engine.screen.height / 2) + 8 - (character.height)
  left: x
  top: y

engine.player.draw = ->
  loc = engine.player.calcLoc()
  engine.handle.drawImage engine.assets.get(engine.player.assets[engine.player.spriteIndex]), loc.left, loc.top

engine.player.move = (direction) ->
  return  unless direction
  if engine.map.getObject(engine.viewport.x + 4, engine.viewport.y + 4) and engine.map.getObject(engine.viewport.x + 4, engine.viewport.y + 4).beforeStep
    cancel = engine.scripts.call[engine.map.getObject(engine.viewport.x + 4, engine.viewport.y + 4).beforeStep](direction, engine.map.getObject(engine.viewport.x + 4, engine.viewport.y + 4))
    return  if cancel
  index = undefined
  x = undefined
  y = undefined
  index = x = y = 0
  engine.keyboard.canInput = false
  switch direction
    when "up"
      index = 6
      y = 1
    when "right"
      index = 3
      x = -1
    when "left"
      index = 9
      x = 1
    when "down"
      index = 0
      y = -1
  unless engine.player.spriteIndex is index
    engine.player.spriteIndex = index
    engine.keyboard.canInput = true
    return
  toX = engine.viewport.x + (engine.screen.tilesX / 2 - 0.5) - x
  toY = engine.viewport.y + (engine.screen.tilesY / 2 - 0.5) - y
  if engine.map.currentMap.objects[toY] and engine.map.currentMap.objects[toY][toX] and engine.map.currentMap.objects[toY][toX].block
    engine.keyboard.canInput = true
  else
    engine.tile.offsetX = x * 5
    engine.tile.offsetY = y * 5
    setTimeout engine.player.animate, 100
    setTimeout engine.player.reset, 200
  engine.player.spriteIndex = index
  engine.draw()
  if engine.map.getObject(engine.viewport.x + 4, engine.viewport.y + 4) and engine.map.getObject(engine.viewport.x + 4, engine.viewport.y + 4).afterStep
    cancel = engine.scripts.call[engine.map.getObject(engine.viewport.x + 4, engine.viewport.y + 4).afterStep](direction, engine.map.getObject(engine.viewport.x + 4, engine.viewport.y + 4))
    return  if cancel

engine.player.animate = ->
  x = undefined
  y = undefined
  x = y = 0
  switch engine.player.spriteIndex
    when 6
      y = 11
    when 3
      x = -11
    when 9
      x = 11
    when 0
      y = -11
  engine.player.spriteIndex += (if (engine.player.leftLeg) then 1 else 2)
  engine.player.leftLeg = not engine.player.leftLeg
  engine.tile.offsetX = x
  engine.tile.offsetY = y
  engine.draw()

engine.player.reset = ->
  index = undefined
  x = undefined
  y = undefined
  x = engine.viewport.x
  y = engine.viewport.y
  index = 0
  switch engine.player.spriteIndex
    when 7, 8
      y--
      index = 6
    when 4, 5
      x++
      index = 3
    when 1, 2
      y++
      index = 0
    when 10, 11
      x--
      index = 9
  engine.viewport.x = x
  engine.viewport.y = y
  engine.keyboard.canInput = true
  engine.tile.offsetX = 0
  engine.tile.offsetY = 0
  engine.player.spriteIndex = index
  engine.draw()
