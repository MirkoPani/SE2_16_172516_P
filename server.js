// packages
var express = require('express');
var bodyParser = require('body-parser');
var newsModel = require('./models/newsModel.js');
var roomsModel = require('./models/roomsModel.js');

//Express configuration
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
var port = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//Richiesta home iniziale
app.get('/', function(req, res) {
    res.render('pages/index', {});
});

//Richiesta news
app.get('/news', function(req, res) {
    res.render('pages/news', {data: newsModel.news});
});

//Richiesta news
app.get('/searchRoom', function(req, res) {
    res.render('pages/searchRoom', {});
});

//Richiesta POST a /searchRoom per ottenere il luogo di una stanza.
app.post('/searchRoom/', function(request, response) {
    var aula;
    if(request.body.room!=""){
            aula = roomsModel.getRoom(request.body.room.toLowerCase());
    }
    response.send(JSON.stringify(aula));
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
