window.onload = () ->
  engine = 
    events : new Eventjs( 'draw', 'key', 'step' )
    settings :
      width : 32
      height : 32

  engine.assets = new AssetEngine engine
  engine.viewport = new ViewportEngine engine, 'viewport'
  engine.images = new ImageEngine engine
  engine.audio = new AudioEngine engine
  engine.map = new MapEngine engine
  engine.tiles = new TileEngine engine

  # checks to see if a chain of 'params' exists on input
  engine.checkObject = (input,param...) ->
    valid = true
    check = (valid,input,param...) ->
      toCheck = param.shift()
      if input[toCheck]
        if param.length > 0
          check(valid,input[toCheck],param...)
      else
        valid = false
    check(valid,input,param...)
    valid
  
  engine.assets.loadAll('data/assets.json')

  engine.loop = () ->
    engine.events.trigger('step')
    engine.events.trigger('draw')
    window.requestAnimationFrame(engine.loop)

  engine.startLoop = () ->
    window.requestAnimationFrame(engine.loop)

  window.engine = engine
