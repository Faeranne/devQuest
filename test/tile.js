var assert = require("assert")
var tile = require("../build/js/tile.js")

describe('tile', function(){
	describe('create', function(){
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
			testTile = new tile.Tile('#test',32,32,2,2,viewport)
		})
		it('should call viewport.drawImage with it\'s settings when draw is called', function(){
			testTile.draw(5,3)
			assert.equal('#test',viewport.src)
			assert.equal(32,viewport.sx)
			assert.equal(32,viewport.sy)
			assert.equal(32,viewport.width)
			assert.equal(32,viewport.height)
			assert.equal(5,viewport.x)
			assert.equal(3,viewport.y)
		})
	})
})
