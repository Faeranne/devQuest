module.exports = viewport = {}

viewport.center = 
	x: 0
	y: 0
viewport.size =
	width: 3
	height: 3
viewport.tile = 
	width: 32
	height: 32
viewport.setCenter = (x,y) ->
	viewport.center.x = x
	viewport.center.y = y
viewport.setCorner = (x,y) ->
	viewport.center.x = x + (viewport.size.width-1)/2
	viewport.center.y = y + (viewport.size.height-1)/2
viewport.setSize = (w,h) ->
	if !(w%2) or !(h%2)
		throw new Error('Bad Size')
	viewport.size.width = w
	viewport.size.height = h
viewport.getViewportX = (worldX) ->
	return worldX - viewport.center.x
viewport.getViewportY = (worldY) ->
	return worldY - viewport.center.y
viewport.getPixelX = (x) ->
	return ((x - 1) + (viewport.size.width-1)/2)*viewport.tile.width
viewport.getPixelY = (y) ->
	return ((y - 1) + (viewport.size.height-1)/2)*viewport.tile.height
