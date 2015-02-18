_ = require 'underscore'
Tile = (tileSet, x, y)->
	if tileSet.isTileSet
		@width = tileSet.tileWidth
		@height = tileSet.tielHeight
		@image = tileSet.getTileCropped x, y
	else
		@width = tileSet.width
		@height = tileSet.height
		@_image = tileSet
	return @

Tile.prototype = 
	renderable: ->
		return @image

module.exports = Tile
