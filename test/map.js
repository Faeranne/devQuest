assert = require("assert");
map = require("../build/js/map.js")

describe("Map", function(){
	beforeEach(function(){
		testMap = new map.Map(100,100,32,32)
	})
	it('should store tile width and height', function(){
		assert.equal(32, testMap.tileWidth)
		assert.equal(32, testMap.tileHeight)
	});
})
