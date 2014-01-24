assert = require("assert");
actor = require("../build/js/actor.js")

describe("Actor", function(){
	beforeEach(function(){
		testActor = new actor.Actor(true,3,3,'#thing')
	})
	it("should save values passed to it on construction.", function(){
		assert.equal(true,testActor.visible)
		assert.equal(3,testActor.x)
		assert.equal(3,testActor.y)
		assert.equal('#thing',testActor.image)
	})
})
