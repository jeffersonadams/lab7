var total = 0;
var taxTotal = 0;
var taxRate = 1.06;

var inventory = [
  {
    name: "apple",
    price: 1.00,
    tax: false
  },
  {
    name: "t-shirt",
    price: 9.95,
    tax: true
  },
  {
    name: "watermelon",
    price: 3.49,
    tax: false
  },
  {
    name: "spray paint",
    price: 3.89,
    tax: true
  },
  {
    name: "strawberries",
    price: 4.19,
    tax: false
  },
];

alskdjfalksjdhflskjdfa;

inventory.forEach(function(x){
  //print out name and price on each line
  console.log((x.name) + " - $" + (x.price).toFixed(2))
});

for (var i=0; i < inventory.length; i++){
  if (inventory[i].tax === true){
    total = ((inventory[i].price) * taxRate) + total;
  } else {
    total = inventory[i].price + total;
  }
}
console.log("total price - $" + total.toFixed(2));
