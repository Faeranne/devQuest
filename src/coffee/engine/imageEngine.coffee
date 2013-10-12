ImageEngine = (engine) ->
  imageEng = this
  this.engine = engine
  this.images = {}
  
  this.addImage = (id,src) ->
    console.log "adding "+id+" from "+src
    imageEng.engine.assets.toLoad++
    image = new Image()
    image.src = src
    image.onload = () ->
      imageEng.engine.assets.loaded++
      imageEng.engine.assets.events.trigger('update')
    imageEng.images[id]=image

  this.getImage = (id) ->
    imageEng.images[id]

  this.engine.assets.addAssetLoader "images", this.addImage
  return this
