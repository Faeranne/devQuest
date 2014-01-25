class Tile
	###
	#@animation: animation object.
	#@viewport: reference to the viewport the tile is attached to
	###
	constructor: (@animation, @x, @y) ->
	
	draw: () =>
		@animation.draw(@x, @y)
module.exports.Tile = Tile
