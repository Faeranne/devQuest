var assert = require("assert")
var viewport = require("../build/js/viewport.js")
describe('viewport', function(){
	describe('cordinates', function(){
		it('should start at 0,0 when launched', function(){
			assert.equal(0, viewport.center.x)
			assert.equal(0, viewport.center.y)
		});
	});
});
