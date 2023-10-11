/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const smallPizza = { diameter: 13, cost: 16.99 }
const largePizza = { diameter: 17, cost: 19.99 }

const smallPizzaArea = Math.PI * (smallPizza.diameter / 2) ** 2;
const largePizzaArea = Math.PI * (largePizza.diameter / 2) ** 2;

console.log("Small Pizza Area", smallPizzaArea, "inches squared");
console.log("Large Pizza Area", largePizzaArea, "inches squared");

// 2. What is the cost per square inch of each pizza?

smallPizzaCostPerSquareInch = smallPizza.cost / smallPizzaArea;
smallPizzaCostPerSquareInchRounded = Math.round(smallPizzaCostPerSquareInch * 100) / 100;

largePizzaCostPerSquareInch = largePizza.cost / largePizzaArea;
largePizzaCostPerSquareInchRounded = Math.round(largePizzaCostPerSquareInch * 100) / 100;

console.log("Small pizza cost per square inch", smallPizzaCostPerSquareInchRounded);
console.log("Large pizza cost per square inch", largePizzaCostPerSquareInchRounded);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const maxCardValue = 13;

function pickACard(max) {
    return Math.floor(Math.random() * max);
}

console.log("Random card:", pickACard(maxCardValue));

// 4. Draw 3 cards and use Math to determine the highest
// card

const firstCard = pickACard(maxCardValue);
const secondCard = pickACard(maxCardValue);
const thirdCard = pickACard(maxCardValue);

const highestValueCard = Math.max(firstCard, secondCard, thirdCard);

console.log("First card", firstCard);
console.log("Second card", secondCard);
console.log("Third card", thirdCard);
console.log("Highest value card", highestValueCard);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
const firstName = "John";
const lastName = "Doe";
const streetAddress = "1234 Main St";
const city = "AnyTown";
const state = "AnyState";
const zipCode = 12345;

const formattedAddressBlock = `
  ${firstName} ${lastName}
  ${streetAddress}
  ${city}, ${state} ${zipCode}
`;

console.log("Formatted address block");
console.log(formattedAddressBlock);


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const words = formattedAddressBlock.trim().split(" ");

const extractedFirstName = words[0];
console.log("Extracted first name", extractedFirstName);


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2019, 3, 1);
