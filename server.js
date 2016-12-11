// grab the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var newsModel = require('./models/newsModel.js');
var roomsModel = require('./models/roomsModel.js');
//Express configuration
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));
var port = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//Richiesta home iniziale
app.get('/', function(req, res) {
    res.render('pages/index', {});
});


//Richiesta news
app.get('/news', function(req, res) {
    res.render('pages/news', {
        data: newsModel.news
    });
});

//Richiesta news
app.get('/searchRoom', function(req, res) {
    res.render('pages/searchRoom', {});
});

app.get('/searchRoom/search', function(request, response) {
    console.log("got request");
    console.log(request.body.room);
    var headers = {};
    // IE8 does not allow domains to be specified, just the *
    // headers["Access-Control-Allow-Origin"] = req.headers.origin;
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
    //answer
    headers["Content-Type"] = "application/json";

    var aula;

    if (typeof request.body !== 'undefined' && request.body) {

        //do stuff if query is defined and not null
        if (typeof request.body.room !== 'undefined' && request.body.room) {

            aula = roomsModel.getRoom(request.body.room);
        } else
            aula = "not defined";

    } else {
        aula = "body undefined";

    }

    console.log(request.body);

    //test output and write the proper headers
    if (aula != "not defined" && aula != "body undefined")
    //aceptable input
        response.writeHead(200, headers);
    else
    //unaceptable input
        response.writeHead(406, headers);

    response.end(aula);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
