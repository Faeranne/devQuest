class Tile
	###
	#@src: image-like object to source the spritesheet from
	#@width: width of the tile.
	#@height: height of the tile.
	#@sheetX: x position of the tile on the spritesheet (in tiles)
	#@sheetY: y position of the tile on the spritesheet (in tiles)
	#@viewport: reference to the viewport the tile is attached to
	###
	constructor: (@src, @width, @height, @sheetX, @sheetY, @viewport) ->
	
	draw: (x, y) =>
		@viewport.drawImage(@src, ((@sheetX-1)*@width), ((@sheetY-1)*@height), @width, @height, x, y)
module.exports.Tile = Tile
