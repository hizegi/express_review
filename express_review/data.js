//transfers data across files
// 2 part process
//save your data/object/array in module.exports
// 2. require it on server.js (For now)
module.exports = {
  things: [
    {
      description: "get beer",
      urgent: true
    }, {
      description: "dry cleaning",
      urgent: false
    }
  ]
}
