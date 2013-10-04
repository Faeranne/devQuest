engine = (if (typeof engine is "undefined") then {} else engine)
engine.scripts = {}
engine.scripts.call =
  tell: (object) ->
    engine.viewport.drawMessage object.text, () ->
      engine.draw()

  nextlevel: (object) ->
    engine.nextLevel()

  transition: (dir, object) ->
    if object.direction is dir
      engine.map.setMap object.map
      engine.map.setXY parseInt(object.x), parseInt(object.y)
      engine.draw()
      true
