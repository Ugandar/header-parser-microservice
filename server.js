
var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

app.listen(port,function(){
    console.log("App is listening on port:"+port);
});
/*
app.get('/',function(req,res){
    res.send("Page not found");
});
*/
app.get('/api/whoami/',function(req,res){
    
    var ip = req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress ;
    
    var output ={
         'ipaddress': ip,
         'language': req.headers["accept-language"].split(',')[0],
         'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
    };
    res.send(output);
});