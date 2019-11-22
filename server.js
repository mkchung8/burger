
const express = require("express"); 

const PORT = process.env.PORT || 3000; 

const app = express(); 

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

const orm = require("./config/orm"); 

var routes = require("./controllers/burger-controller"); 

app.use(routes); 

app.listen(PORT, function(){
    console.log(`App is now listening on PORT: http://localhost:${PORT}`)
});

