engine = (if (typeof engine is "undefined") then {} else engine)
engine.screen = {}
engine.setViewport = (id) ->
  engine.canvas = document.getElementById(id)
  engine.handle = engine.canvas.getContext("2d")
  engine.screen.width = engine.canvas.width
  engine.screen.height = engine.canvas.height
  engine.screen.tilesX = engine.canvas.width / 16
  engine.screen.tilesY = engine.canvas.height / 16

engine.setFullscreen = (id) ->
  elem = document.getElementById(id)
  if elem.requestFullscreen
    elem.requestFullscreen()
  else if elem.mozRequestFullScreen
    elem = document.getElementById("wrapper")
    console.log elem.mozRequestFullScreen()
  else elem.webkitRequestFullscreen()  if elem.webkitRequestFullscreen


engine.viewport = {}
engine.viewport.x = 0
engine.viewport.y = 0

engine.viewport.wrapText = (context, text, x, y, maxWidth, lineHeight) ->
  words = text.split ' ';
  line = '';
  console.log(words)
  for word,i in words 
    testLine = line + word + ' ';
    metrics = context.measureText(testLine);
    testWidth = metrics.width;
    if testWidth > maxWidth and i > 0 
      context.strokeText(line, x, y);
      line = word + ' ';
      y += lineHeight;
    else 
      line = testLine;
  context.strokeText(line, x, y);

engine.viewport.drawMessage = (text,cb) ->
  engine.handle.beginPath();
  engine.handle.rect 0,engine.screen.height*2/3,engine.screen.width,engine.screen.height/3 
  engine.handle.fillStyle = 'white'
  engine.handle.fill();
  engine.handle.linewidth = 7
  engine.handle.strokeStyle = 'black';
  engine.handle.stroke();
  engine.handle.fillStyle = 'black'
  engine.handle.font = "7px sans-serif"
  engine.viewport.wrapText(engine.handle,text,8,engine.screen.height*2/3+10,engine.screen.width-16,10)
  engine.keyboard.callback "a",cb
