engine = (if (typeof engine is "undefined") then {} else engine)
engine.keyboard = {}
engine.keyboard.canInput = true
engine.keyboard.getValue = (key) ->
  switch key
    when 38
      "up"
    when 40
      "down"
    when 37
      "left"
    when 39
      "right"
    when 65
      "a"

engine.keyboard.parseInput = (event) ->
  if engine.keyboard.canInput
    engine.draw()
    toContinue = true
    if engine.keyboard.callback[engine.keyboard.getValue(event.keyCode)]
      while engine.keyboard.callback[engine.keyboard.getValue(event.keyCode)].length > 0
        if engine.keyboard.callback[engine.keyboard.getValue(event.keyCode)].pop()()
          toContine=false;
    if engine.keyboard.callback[engine.keyboard.getValue(event.keyCode)]
      while engine.keyboard.callback.all.length > 0
        if engine.keyboard.callback.all.pop()()
          toContinue=false;
    if not toContinue
      return
    switch engine.keyboard.getValue(event.keyCode)
      when "up"
        , "down"
        , "left"
        , "right"
          engine.player.move engine.keyboard.getValue(event.keyCode)
          engine.draw()
      when "a"
        engine.player.activate()

engine.keyboard.callbacks = {}

engine.keyboard.callback = (key,cb) ->
  if not engine.keyboard.callbacks[key]
    engine.keyboard.callbacks[key] = []
  engine.keyboard.callbacks[key].push cb
