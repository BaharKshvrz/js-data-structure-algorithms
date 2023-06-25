// Hash Table defined by "Object"
let obj = {
  Nathan: "555-0182",
  Jane: "315-0322",
  getName: function() {
     console.log(` ${this.Nathan}  ${this.Jane} `);  
  }
}

// Hash Table defined by "Map"
let collection = new Map();
collection.set("name", "Bahar");
collection.set("family", "Keshavarz");
console.log(collection);  // Map(2) { 'name' => 'Bahar', 'family' => 'Keshavarz' }


collection["size"] = false;
// console.log(collection.get("size")); // undefined
// console.log(collection.size); // 1
