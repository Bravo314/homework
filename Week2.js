//create two variables: pizzaPlace and numberOfToppings
let pizzaPlace = wordsPizza;

console.log(typeof pizzaPlace);

let numberOfToppings = 10;

console.log(typeof numberOfToppings);
//Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
`"hello wordsPizza", I said, "I would like 10 numbeOfToppings."`

//Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.

if numberOfToppings < 10 {
  console.log("Quality, not quanity.");
} else if numberOfToppings > 10 {
  console.log("A whole lot of pizza")
}


