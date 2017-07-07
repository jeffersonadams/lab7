var total = 0;
var totalTax = 0;
var taxedTotal = 0;
var taxRate = 0.06;

var inventory = [
  {
    name: "apple",
    price: 1.00,
    tax: false,
    quantity: 5
  },
  {
    name: "t-shirt",
    price: 9.95,
    tax: true,
    quantity: 1
  },
  {
    name: "watermelon",
    price: 3.49,
    tax: false,
    quantity: 1
  },
  {
    name: "spray paint",
    price: 3.89,
    tax: true,
    quantity: 2
  },
  {
    name: "strawberries",
    price: 4.19,
    tax: false,
    quantity: 3
  },
];

inventory.forEach(function(x){
  //print out name and price on each line
  console.log((x.quantity) + " x " + (x.name) + " = $" + (x.price).toFixed(2))
});

for (var i=0; i < inventory.length; i++){
  if (inventory[i].tax === true){
    total = ((inventory[i].price) * (1 + taxRate)) * (inventory[i].quantity) + total;
    totalTax = ((inventory[i].price) * (inventory[i].quantity) *  taxRate) + totalTax;
  } else {
    total = inventory[i].price * inventory[i].quantity + total;
  }
}
console.log("total tax = $" + totalTax.toFixed(2));
console.log("total price = $" + total.toFixed(2));
