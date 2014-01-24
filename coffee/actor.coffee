class Actor
	constructor: (@visible,@x,@y,@image) ->

	setImage: (image) ->
		@image=image

module.exports.Actor = Actor
