engine = (if (typeof engine is "undefined") then {} else engine)
engine.assets = {}
engine.assets.loaded = []
engine.assets.done = ->
  unless engine.assets.progress()
    true
  else
    false

engine.assets.preload = (assets, cb) ->
  console.log(assets)
  for item in assets
    engine.assets.set item.id, item.src  
  while not engine.assets.done
    console.log('loading')
  cb()

engine.assets.images = {}
engine.assets.set = (id, src) ->
  engine.assets.loaded++
  image = new Image()
  image.src = src
  image.onload = ->
    engine.assets.loaded--
  engine.assets.images[id] = image

engine.assets.get = (id) ->
  engine.assets.images[id]
engine.assets.done = ->
  if engine.assets.done>0
    return false
  else
    return true

engine.assets.getJSON = (file,cb) ->
  xmlhttp = undefined
  
  xmlhttp = new XMLHttpRequest()  if window.XMLHttpRequest
  xmlhttp.onreadystatechange = ->
    if xmlhttp.readyState is 4 and xmlhttp.status is 200
      response = JSON.parse(xmlhttp.responseText)
      cb(response)

  xmlhttp.open "GET", file, true
  xmlhttp.send()
