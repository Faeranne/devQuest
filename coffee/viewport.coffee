class Viewport
	constructor: (@x, @y, @width, @height, dom) ->
	
	move: (x, y) ->
		@x+=x
		@y+=y
	
	set: (x, y) ->
		@x=x
		@y=y
	
	drawImage: (src, x, y) ->
		if x > @x and x < @x+@width
			if y > @y and y < @y+@height
				@canvas.drawImage src.x, src.y, src.w, src.h, x-@x, y-@y, src.w, src.h 

	drawViewport: (src, x, y) ->
		@canvas.drawImage src.x, src.y, src.w, src.h, x, y, src.w, src.h
	
