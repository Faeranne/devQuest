engine = (if (typeof engine is "undefined") then {} else engine)
engine.mobile = {}
engine.mobile.touches = {}
engine.mobile.pad = {}
engine.mobile.startTouch = (event) ->
  unless engine.mobile.pad.active
    engine.mobile.pad.start = Date.now()
    touch = event.touches[0]
    engine.mobile.pad.x = touch.clientX
    engine.mobile.pad.y = touch.clientY
    engine.mobile.pad.active = true
    engine.mobile.pad.move = ""
  else
    engine.player.activate()

engine.mobile.moveTouch = (event) ->
  event.preventDefault()
  touch = event.touches[0]
  x = touch.clientX - engine.mobile.pad.x
  y = touch.clientY - engine.mobile.pad.y
  if engine.mobile.pad.active
    if Math.abs(x) > Math.abs(y)
      if x < 0
        engine.mobile.pad.move = "left"
      else
        engine.mobile.pad.move = "right"
    else
      if y < 0
        engine.mobile.pad.move = "up"
      else
        engine.mobile.pad.move = "down"

engine.mobile.stopTouch = (event) ->
  if event.changedTouches[0].identifier is 0
    engine.player.activate()  if engine.mobile.pad.start > Date.now() - 500
    engine.mobile.pad.active = false

engine.mobile.draw = ->
  engine.player.move engine.mobile.pad.move  if engine.keyboard.canInput  if engine.mobile.pad.active
