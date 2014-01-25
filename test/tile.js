var assert = require("assert")
var tile = require("../build/js/tile.js")

describe('tile', function(){
	var animation = {}
	animation.src=""
	animation.x=0
	animation.y=0
	animation.draw = function(x,y){
		animation.x=x
		animation.y=y
	}
	beforeEach(function(){
		testTile = new tile.Tile(animation,2,2)
	})
	it('should hold values passed to it on creation', function(){
		assert.equal(2, testTile.x)
		assert.equal(2, testTile.y)
	})
	describe('#draw',function(){
		it('should call animation.draw with with it\'s passed variable', function(){
			testTile.draw()
			assert.equal(2,animation.x)
			assert.equal(2,animation.y)
		})
	})
})
