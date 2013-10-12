AssetEngine = (engine) ->
  assets = this
  this.loaded = 0
  this.toLoad = 0
  this.engine = engine
  this.events = new Eventjs('loaded','update')
  this.assetLoader = {}

  this.addAssetLoader = (type,fn) ->
    assets.assetLoader[type] = fn
  
  this.loadAsset = (type,id,src) ->
    console.log "getting asset type "+type
    assets.assetLoader[type] id, src
  
  this.getJson = (src,cb) ->
    assets.toLoad++
    console.log(src)
    request = new XMLHttpRequest()
    request.onload = () ->
      assets.loaded++
      console.log(this.responseText)
      cb JSON.parse(this.responseText)
    request.open("get",src,true)
    request.send()

  this.getAsset = (type,id) ->
    return assets.assets[type][id]

  this.events.on 'update', () ->
    if this.toLoad == this.loaded
      assets.events.trigger('loaded')

  this.loadAll = (src) ->
    assets.getJson src, (stuff) ->
      console.log stuff
      for type,assetSet of stuff
        console.log assetSet
        console.log type 
        if assets.assetLoader[type]
          console.log "loading asset"
          for asset in assetSet
            assets.loadAsset type, asset.id, asset.src
        else
          console.warning('couldn\'t load asset type: '+type+'.  No loader defined')
 
  return this
