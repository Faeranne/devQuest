# creates a new viewport.
#
# engine passes in a reference to the global engine.  less messy
# canvasId is the element id for the canvas to be used.
ViewportEngine = (engine,canvasId) ->

  viewport = this
  this.engine = engine
  this.canvas = document.getElementById(canvasId)
  this.handle = this.canvas.getContext('2d')
  this.toDraw = []
  this.drawSequence = []
  
  # these are actual widths of the canvas
  this.width = this.canvas.width
  this.height = this.canvas.height

  # draw an image on the canvas.
  # image is a reference from assets.getImage
  # x and y are relative to corner.
  this.drawImage = (image,x,y) ->
    this.handle.drawImage(image.output, image.sx, image.sy, image.sw, image.sh, x, y, image.sw, image.sh)

  this.addDrawImage = (image,x,y) ->
    toDraw = 
      image:image
      x:x
      y:y

    viewport.toDraw.push(toDraw)
  
  this.setDrawSequence = (loc,fn) ->
    viewport.drawSequence[loc]=fn

  this.draw = () ->
    console.log "drawing new frame"
    for fn in viewport.drawSequence
      console.log(fn)
      fn()
    console.log "rendering to canvas"
    for image in viewport.toDraw
      viewport.drawImage image.image, image.x, image.y
    viewport.toDraw.length = 0
  this.engine.events.on('draw',this.draw)
 
  return this
