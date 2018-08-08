var express = require('express');
var app = express();
var request = require('request');
var path = require('path');
var https = require('https');
var bodyparser = require('body-parser');
var hbs = require('express-handlebars');


//Engine Declaration
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views/layouts/'));
app.set('view engine', 'hbs');

//Middleware Declaration
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());


//Starting of Server
app.listen(3000, () => {
    console.log('Server is runnnig at port 3000');
});


app.get('/users', function(err, res){
request('https://jsonplaceholder.typicode.com/todos', function (error, response, body) {
  
   

  var datas = JSON.parse(body);
  res.render('layout', {data : datas});
  
});
});
 
    
