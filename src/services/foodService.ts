// import { faker } from "@faker-js/faker";
// import { storeFoodData } from "../helpers/helpers.js";
// //import { FoodData } from "../types"; // Assuming you have a type definition file for TypeScript

// const validCategories = ['Vegetarian', 'Vegan', 'Seafood', 'Regular'];

// // Base toppings organized by category
// const baseToppings: Record<string, string[]> = {
//   Vegetarian: ["bell peppers", "spinach", "mushrooms", "olives", "tomatoes"],
//   Vegan: ["tomatoes", "lettuce", "cucumbers", "bell peppers", "chickpeas"],
//   Seafood: ["shrimp", "tuna", "salmon", "squid", "anchovies"],
//   Regular: ["cheese", "pepperoni", "ham", "bacon", "sausage"]
// };

// export const generateFoodData = (type: string, category: string): FoodData => {
//   if (!validCategories.includes(category)) {
//     throw new Error(`Invalid category: ${category}. Must be one of ${validCategories.join(", ")}`);
//   }

//   // Generate random food data
//   const generatedFoodData: FoodData = {
//     type: type,
//     size: faker.helpers.arrayElement(["medium", "large", "small"]),
//     toppings: faker.helpers.arrayElements(baseToppings[category], faker.datatype.number({ min: 1, max: 5 })),
//     price: faker.commerce.price(5, 30, 2, "$"),
//     calories: faker.datatype.number({ min: 250, max: 1200 }),
//     category: category as 'Vegetarian' | 'Vegan' | 'Seafood' | 'Regular'
//   };

//   // Store the generated food data asynchronously
//   storeFoodData(generatedFoodData).catch(error => {
//     console.error("Failed to store food data:", error);
//   });

//   return generatedFoodData;
// };

import { faker } from "@faker-js/faker";
import { storeFoodData } from "../helpers/helpers.js";
//import { FoodData } from "../types"; // Assuming you have a type definition file for TypeScript

const validCategories = ['Vegetarian', 'Vegan', 'Seafood', 'Regular'];

// Base toppings organized by category
const baseToppings: Record<string, string[]> = {
  Vegetarian: ["bell peppers", "spinach", "mushrooms", "olives", "tomatoes"],
  Vegan: ["tomatoes", "lettuce", "cucumbers", "bell peppers", "chickpeas"],
  Seafood: ["shrimp", "tuna", "salmon", "squid", "anchovies"],
  Regular: ["cheese", "pepperoni", "ham", "bacon", "sausage"]
};

export const generateFoodData = (type: string, category: string): FoodData => {
  if (!validCategories.includes(category)) {
    throw new Error(`Invalid category: ${category}. Must be one of ${validCategories.join(", ")}`);
  }

  // Generate random food data
  const generatedFoodData: FoodData = {
    type: type,
    size: faker.helpers.arrayElement(["medium", "large", "small"]),
    toppings: faker.helpers.arrayElements(
      baseToppings[category],
      faker.number.int({ min: 1, max: 5 }) // Updated method for generating numbers
    ),
    price: faker.commerce.price({ min: 5, max: 30, dec: 2, symbol: "$" }), // Updated method for generating price
    calories: faker.number.int({ min: 250, max: 1200 }), // Updated method for generating calories
    category: category as 'Vegetarian' | 'Vegan' | 'Seafood' | 'Regular'
  };

  // Store the generated food data asynchronously
  storeFoodData(generatedFoodData).catch(error => {
    console.error("Failed to store food data:", error);
  });

  return generatedFoodData;
};



