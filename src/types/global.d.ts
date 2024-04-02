// interface PizzaData {
//   type: string;
//   size: string;
//   toppings: string[];
//   price: string;
// }

import { faker } from "@faker-js/faker";

// Define the PizzaData interface
interface PizzaData {
  type: string;        // e.g., "Margherita", "Pepperoni"
  size: string;        // e.g., "small", "medium", "large"
  toppings: string[];  // e.g., ["mushrooms", "onions"]
  price: string;       // e.g., "$9.99"
}

// Function to generate random pizza data
export const generatePizzaData = (): PizzaData => {
  // Generate random pizza data
  const generatedPizzaData: PizzaData = {
    type: faker.random.arrayElement(["Margherita", "Pepperoni", "Hawaiian", "Veggie"]),
    size: faker.random.arrayElement(["small", "medium", "large"]),
    toppings: faker.random.arrayElements(
      ["mushrooms", "peppers", "onions", "sausages", "bacon", "extra cheese"],
      faker.datatype.number({ min: 1, max: 5 }) // Random number of toppings between 1 and 5
    ),
    price: faker.commerce.price(5, 20, 2, "$") // Random price between $5 and $20
  };

  // Return pizza data
  return generatedPizzaData;
};

