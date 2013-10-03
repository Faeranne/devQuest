chai = require 'chai'
{engine} = require '../engine/entities.coffee'
chai.should()
expect = chai.expect

engine.viewport={}
engine.viewport.draw = (x,y,frame,offx,offy)->
  return x+' '+y+' '+frame+' '+offx+' '+offy
describe 'An entity', ->
  entity1 = null
  it 'should default to 0,0', ->
    entity1 = new engine.Entity engine
    entity1.x.should.equal 0
    entity1.y.should.equal 0
  it 'should change x and y with setXY()', ->
    entity1 = new engine.Entity engine
    entity1.setXY 5,4
    entity1.x.should.equal 5
    entity1.y.should.equal 4
  it 'should add references to frames with addFrame', ->
    entity1 = new engine.Entity engine
    entity1.addFrame('test_id1','frame_object')
    entity1.frames.test_id1.should.equal 'frame_object'
  it 'should add callable references to scripts with addScript', ->
    entity1 = new engine.Entity engine
    newScript = (entity,param1) ->
      return param1+' success'
    entity1.addScript 'first_script', newScript
    entity1.scripts.first_script(entity1,'a big').should.equal 'a big success'
  it 'should call a script by id with execScript with itself as the first parameter', ->
    entity1 = new engine.Entity engine
    newScript = (entity,param1) ->
      return entity.x+param1+' success'
    entity1.addScript 'second_script', newScript
    entity1.execScript('second_script','a big').should.equal '0a big success'
  it 'should pass all parameters given to execScript as subsequent parameters', ->
    entity1 = new engine.Entity engine
    newScript = (entity,param1,param2,param3) ->
      return entity.x+param1+' '+param2+' '+param3
    entity1.addScript 'second_script', newScript
    entity1.execScript('second_script','a','big','success').should.equal '0a big success'
  it 'should set the current frame with setCurrentFrame', ->
    entity1 = new engine.Entity engine
    entity1.addFrame 'test_id1','[Frame Object]'
    entity1.setCurrentFrame 'test_id1'
    entity1.currentFrame.should.equal 'test_id1'
