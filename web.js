var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  buf = fs.readFileSync('index.html');
  myString = buf.toString();
  response.send(myString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
