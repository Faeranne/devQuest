class Animation
	constructor: (@viewport, @src, @sx, @sy, @width, @height, @countX, @countY) ->
		@xPlace = 0
		@yPlace = 0

	draw: (x,y)->
		@viewport.drawImage(@src, @sx+@xPlace, @sy+@yPlace, @width, @height, x, y)

module.exports.Animation = Animation
