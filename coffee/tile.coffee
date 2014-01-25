class Tile
	###
	#@src: image-like object to source the spritesheet from
	#@width: width of the tile.
	#@height: height of the tile.
	#@sheetX: x position of the tile on the spritesheet (in tiles)
	#@sheetY: y position of the tile on the spritesheet (in tiles)
	#@viewport: reference to the viewport the tile is attached to
	###
	constructor: (@animation, @x, @y) ->
	
	draw: () =>
		@animation.draw(@x, @y)
module.exports.Tile = Tile
