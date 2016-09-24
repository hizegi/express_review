//=========================
// 1. REQUIREMENTS
//=========================
var express =     require("express");
var hbs     =     require("hbs");
var logger  =     require("morgan");
var bodyParser =  require("body-parser");
var port    =     process.env.PORT || 3000;
var app     =     express();
var things    =     require("./data.js");

//=========================
// 2. MIDDLEWARES
//=========================
//handlebars
app.set('view engine', 'hbs');
//morgan
app.use( logger('dev'));
//body-parser
app.use(bodyParser.urlencoded({
  extended: true
}));
// public folder
// method-override (PUT === EDIT STUFF.. we need this)


//=========================
// 3. CONTROLLERS
//=========================
//root route
app.get('/', function(req, res){
  //view route/director, object === DATA to send to the "FRONT/CLIENT/BROSWER"
  res.render('index.hbs', {data: things.things});
});

//food route
app.get('/food', function(req, res){
  res.send("YUM FOOD");
});

app.get('/:something', function(req, res){
  res.send("ERROR 404");
});

app.get('/food/fruits', function(req, res){
  res.send("FRUITS!!!! ");
});

app.get('/food/:id', function(req, res){
  res.send("Oooh that sounds yummy");
  var myFruit = req.params.id;
  // console.log("This is req: ", req);
  console.log("This is myFruit: ", myFruit);
});

//=========================
// 2. LISTENERS
//=========================
app.listen(port, function(){
  console.log("========================");
  console.log("LISTENING TO PORT 3000");
  console.log("========================");
});
