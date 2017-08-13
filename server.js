var express = require('express');
var app = express();
var formidable = require('express-formidable');
var fs = require('fs');
var filePath = __dirname + '/data/posts.json';

app.use(express.static("public"));
app.use(formidable());

app.get('/get-posts', function(req, res) {
    res.sendFile(filePath);
});

app.post('/create-post', function(req, res) {
    fs.readFile(filePath, function (error, file) {
        var parsedFile = JSON.parse(file);
        parsedFile[Date.now()] = req.fields.blogpost;
        fs.writeFile(filePath, JSON.stringify(parsedFile), function (error) {
            
        });
    });
});

app.listen(process.env.PORT, function () {
  console.log('Server is listening on port 8080. Ready to accept requests!');
});