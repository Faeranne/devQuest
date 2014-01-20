var assert = require("assert")
var engine = require("../client/js/engine.js")
describe('viewport', function(){
	describe('cordinates', function(){
		it.skip('should start at 0,0 when launched', function(){
			assert.equal(0, viewport.center.x)
			assert.equal(0, viewport.center.y)
		});
	});
});
