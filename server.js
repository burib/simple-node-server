var express = require('express'),
    http = require('http'),
    app = express();

app.set('port', process.env.PORT || 1526);
//compress content (gzip)
app.use(express.compress());
app.use(express.static(__dirname + '/public', { maxAge: 100 }));
// move express.logger() before express.static if you want to log every requests
app.use(express.logger());


http.createServer(app).listen(app.get('port'), function () {
  console.log("\n\nNode version: " + process.versions.node);
  console.log("Express server listening on port " + app.get('port') + "\n\n");
});
