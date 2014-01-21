module.exports = viewport = {}

viewport.center = 
	x: 0
	y: 0
viewport.size =
	width: 3
	height: 3
viewport.setCenter = (x,y) ->
	viewport.center.x = x
	viewport.center.y = y
viewport.setCorner = (x,y) ->
	viewport.center.x = x + (viewport.size.width-1)/2
	viewport.center.y = y + (viewport.size.height-1)/2

