var express = require('express');
var app = express();
console.log('express..');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
console.log('bodyParser..');

app.get('/', function (req, res) {
    res.sendFile('/home/raghu/CS565-Web-development/assignment5/index.html');
});
console.log('index.html..');

app.post('/submit', function (req, res) {
    var name = 'FirstName: '+ req.body.fullname;

    var lname = 'LastName: '+ req.body.email;

    var com = 'Comment: '+ req.body.comment;
   
    res.write(name + '\r\n');
   
    res.write(lname + '\r\n');

    res.write(com + '\r\n');
   
    res.end();
});

var server = app.listen(5050, function () {
    console.log('Node server is running..');
});
