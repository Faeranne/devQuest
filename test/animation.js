var assert = require("assert")
var animation = require("../build/js/animation.js")

describe('animaion', function(){
	var newtile = null
	var viewport = {}
	viewport.src=""
	viewport.sx=0
	viewport.sy=0
	viewport.width=0
	viewport.height=0
	viewport.x=0
	viewport.y=0
	viewport.drawImage = function(src,sx,sy,width,height,x,y){
		viewport.src=src
		viewport.sx=sx
		viewport.sy=sy
		viewport.width=width
		viewport.height=height
		viewport.x=x
		viewport.y=y
	}
	beforeEach(function(){
		testAnimation = new animation.Animation(viewport, '#image', 1, 1, 32, 32, 2, 2)
	})
	it('should hold values passed to it on creation', function(){
		assert.equal('#image', testAnimation.src)
		assert.equal(32, testAnimation.width)
		assert.equal(32, testAnimation.height)
		assert.equal(1, testAnimation.sx)
		assert.equal(1, testAnimation.sy)
		assert.equal(2, testAnimation.countX)
		assert.equal(2, testAnimation.countY)
	})
	describe('#draw', function(){
		it('should send current frame to viewport.drawimage', function(){
			testAnimation.draw(2,3)
			assert.equal(2, viewport.x)
			assert.equal(3, viewport.y)
			assert.equal('#image', viewport.src)
			assert.equal(32, viewport.width)
			assert.equal(32, viewport.height)
			assert.equal(1, viewport.sx)
			assert.equal(1, viewport.sy)
		})
	})

})
