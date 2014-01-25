class Map
	constructor: (@width,@height,@tileWidth,@tileHeight) ->
		@tileList = [] 
	
	addTile: (animation, x, y) ->
		@tileList.push new Tile animation, x*@tileWidth, y*@tileHeight

	draw: () ->
		@drawTile tile for tile in @tileList
	
	drawTile: (tile) ->
		@tileList[tile].draw()
	

module.exports.Map = Map
