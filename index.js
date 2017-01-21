var express = require('express');
var request = require('request');
var app = express();
var cors = require('cors');

app.use(cors()); //allows overriding cross origin policy (use npm install if needed)

app.get('/test', function(req, res){ // listens for request on /api route
 console.log('working!');
 res.send('working!'); // if no errors, send the body of data back to front end
});

/* PUT YOUR CODE BETWEEN COMMENTS */

app.get('/pokemon', function(req, res){
  var url = 'http://pokeapi.co/api/v2/pokemon/';

  request(url, function(error, response, body){
    if (!error && response.statusCode === 200) {
      res.send(body); // if no errors, send the body of data back to front end
    }
  });
});

app.get('/pokemon/id', function(req, res){
  var url = req.query.url;

  request(url, function(error, response, body){
    if (!error && response.statusCode === 200) {
      res.send(body); // if no errors, send the body of data back to front end
    }
  });
});

/* PUT YOUR CODE ABOVE THIS COMMENT */

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server running on port 3000');
