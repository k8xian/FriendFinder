const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


var app = express();


app.use(express.static(__dirname + '/app/public'));

var PORT = process.env.PORT || 3000 || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log(`Listening on port: ${PORT}`);
});



