//=========================
// REQUIREMENTS
//=========================
var express   =   require("express");
var router    =   express.Router();
//our data coming from our data.js file
var things    =   require('../data.js');

//=========================
// INDEX
//=========================
//root directory localhost:3000/food/
router.get('/', function(req, res){
  res.render('foods/index', {
    food: things.things
  });
});

//=========================
// NEW
//=========================
// POST that renders a form
router.get('/new', function(req, res){
  //res.render(view file name) automatically checks in VIEWS
  res.render('foods/new');
});

//=========================
// CREATE
//=========================
//creates the data from the form
// 3 parts
router.post('/new', function(req, res){
  console.log("The create route is accessed!");
  console.log("This is req.body", req.body);
  var food = {
    description: req.body.description,
    price: req.body.price
  }

  //pushing new data into my array
  things.things.push(food);
  console.log(things.things);

  res.redirect('/food')

});

//=========================
// SHOW
//=========================
//displays each individual "item" in our things.things array
router.get('/:id', function(req, res){
  var foodItem = things.things[req.params.id];
  console.log(foodItem);
  res.render('foods/show', {
    data: foodItem
  });
});

//=========================
// EDIT
//=========================
router.get('/:id/edit', function(req, res){
  res.render('foods/edit', {
    food: {
      description: things.things[req.params.id].description,
      price: things.things[req.params.id].price,
      id: req.params.id
    }
  });
});

//=========================
// UPDATE
//=========================
// PUT
router.put('/:id', function(req, res){
  console.log("EDIT ROUTE is ACCESSED!");
  var food = things.things;
  var id = req.params.id;
  food[id].description = req.body.description;
  food[id].price = req.body.price;

  res.redirect('/food')
});

//=========================
// DESTROY
//=========================
router.delete('/:id', function(req, res){
  console.log("Delete route is accessed");
  var foodItem = things.things;
  //use splice to remove the object from the array
  //given the index value

  foodItem.splice(req.params.id, 1);
  console.log("Removing :", foodItem);
  console.log("This is our new array:", things.things);
  res.redirect('/food');
});

//=========================
// EXPORTS
//=========================
module.exports = router;
