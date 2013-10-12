AudioEngine = (engine) ->
  audioEng = this
  this.engine = engine
  this.audio = {}

  this.addAudio = (id,src) ->
    audioEng.engine.assets.toLoad++
    audio = new Howl 
      urls: [
        src
      ]
    audio.onload () ->
      audioEng.engine.assets.loaded++
      audioEng.engine.assets.events.trigger('update')
    audioEng.audio[id]=audio 
  
  audioEng.engine.assets.addAssetLoader "audio", this.addAudio
  console.log this
  
  return this
