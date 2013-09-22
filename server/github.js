var http = require('https');
var querystring = require('querystring');

var app = null;

module.exports.attach = function(app){
  app.get('/login',function(req,res){
    res.redirect('https://github.com/login/oauth/authorize?client_id=6362d728bf52a3f83234');
  })
  app.get('/oauth_callback',function(req,res){
    var code = req.query.code
    var callback = function(response){
      var str = ''
      response.on('data', function(chunk){
        str += chunk;
      })
      response.on('end', function(){
        console.log(str);
        key=JSON.parse(str);
        console.log(str);
      });
    }
    var data = querystring.stringify({
      'client_id':'6362d728bf52a3f83234',
      'client_secret':'3fe023efae517599c3c750e7827b9498cf67631d',
      'code':code
    })
    var req = http.request({host:'github.com',path:'/login/oauth/access_token',port:'443',method:'POST', headers:{'Accept':'application/json'}},callback)
    req.write(data)
    req.end()
  })
}
