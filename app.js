var settings = require('./settings.json');
var querystring = require('querystring');
var https = require('https');
var Request = require('request');
//getter, this works!
Request.get({
    url: settings.url+'/accounts',
    headers: settings.headers,
    method: 'GET'
},
function(e,r,body){
    console.log(body)
});