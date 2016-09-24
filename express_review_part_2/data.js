//transfers data across files
// 2 part process
//save your data/object/array in module.exports
// 2. require it on server.js (For now)
module.exports = {
  things: [
    {
      description: "Hamburger",
      price: 5.00
    }, {
      description: "Donuts",
      price: 2.00
    }
  ]
}
