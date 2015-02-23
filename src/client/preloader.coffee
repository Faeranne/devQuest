Preloader = (srcs) ->
	@toLoad = srcs.length
	@ready = false
	@parts = {}
	for src in srcs
		@load src
	return @
		

Preloader.prototype =
	load: (src) ->
		self = @
		@parts[src].loading = true
		req = new XMLHttpRequest()
		req.onload = ->
			self.parts[src].content = @.responseText
			self.parts[src].loaded = true
			self.loaded = self.loaded + 1
			if self.loaded >= self.toLoad
				self.ready = true
		req.open 'get', src, true
		req.send()
	
module.exports = Preloader
