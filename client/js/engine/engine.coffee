engine = (if (typeof engine is "undefined") then {} else engine)
engine.init = {}
engine.init.x = 15
engine.init.y = 13
engine.init.maps = {}
engine.init.maps.map1 =
  src: "data/maps/map1.json"
  first: true

engine.init.maps.map2 =
  src: "data/maps/map2.json"
  first: false

engine.start = ->
  engine.setViewport "canvas"
  window.addEventListener "keydown", engine.keyboard.parseInput, false
  for key of engine.init.maps
    value = engine.init.maps[key]
    engine.map.addMap key, value.src, value.first
  engine.map.setXY engine.init.x, engine.init.y

engine.fullscreen = ->
  window.addEventListener "touchstart", engine.mobile.startTouch, false
  window.addEventListener "touchmove", engine.mobile.moveTouch, false
  window.addEventListener "touchcancel", engine.mobile.stopTouch, false
  window.addEventListener "touchend", engine.mobile.stopTouch, false
  window.addEventListener "touchleave", engine.mobile.stopTouch, false
  window.setInterval engine.mobile.draw, 50
  engine.canvas.className = "fullscreen"
  engine.setFullscreen "canvas"

engine.nextLevel = ->
  engine.map.setXY 22, 15
  engine.map.setMap "map2"
  engine.draw()

engine.draw = ->
  engine.map.draw()
  engine.player.draw()

assets = [
  id: "pd1"
  src: "images/entities/thomas/d-1.png"
,
  id: "pd2"
  src: "images/entities/thomas/d-2.png"
,
  id: "pd3"
  src: "images/entities/thomas/d-4.png"
,
  id: "pr1"
  src: "images/entities/thomas/r-1.png"
,
  id: "pr2"
  src: "images/entities/thomas/r-2.png"
,
  id: "pr3"
  src: "images/entities/thomas/r-4.png"
,
  id: "pl1"
  src: "images/entities/thomas/l-1.png"
,
  id: "pl2"
  src: "images/entities/thomas/l-2.png"
,
  id: "pl3"
  src: "images/entities/thomas/l-4.png"
,
  id: "pu1"
  src: "images/entities/thomas/u-1.png"
,
  id: "pu2"
  src: "images/entities/thomas/u-2.png"
,
  id: "pu3"
  src: "images/entities/thomas/u-4.png"
,
  id: "rock"
  src: "images/tiles/rock.png"
,
  id: "grass"
  src: "images/tiles/grass.png"
,
  id: "sand"
  src: "images/tiles/sand.png"
,
  id: "water"
  src: "images/tiles/water.png"
,
  id: "sign"
  src: "images/tiles/sign.png"
,
  id: "blank"
  src: "images/tiles/water.png"
]
window.onload = ->
  engine.assets.preload assets, ->
    setTimeout engine.start, 200


window.engine = engine
