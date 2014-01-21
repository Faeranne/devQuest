var assert = require("assert")
var viewport = require("../build/js/viewport.js")
describe('viewport', function(){
	describe('cordinates', function(){
		it('should start at 0,0 when launched', function(){
			assert.equal(0, viewport.center.x)
			assert.equal(0, viewport.center.y)
		});
		it('should return last setCenter', function(){
			viewport.setCenter(9,5);
			assert.equal(9, viewport.center.x)
			assert.equal(5, viewport.center.y)
		})
		it('should return the center based on a corner', function(){
			viewport.setCorner(9,5);
			assert.equal(10, viewport.center.x)
			assert.equal(6, viewport.center.y)
		})
		it('should start widht 3,3 size when launched', function(){
			assert.equal(3, viewport.size.width)
			assert.equal(3, viewport.size.height)
		})
		it('should return return last setSize', function(){
			viewport.setSize(5,9);
			assert.equal(5, viewport.size.width)
			assert.equal(9, viewport.size.height)
		})
	});
});
