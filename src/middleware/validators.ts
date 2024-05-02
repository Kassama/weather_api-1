import { param } from "express-validator";

/**
 * Validates the foodType name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:foodType",
 * validateFoodTypeName,
 * getFoodData
 * );
 */
export const validateFoodTypeName = param("foodType")
  .isString().withMessage("foodType must be a string")
  .isIn(["pizza", "sushi", "burger", "salad"])
  .withMessage("foodType name must be either pizza, sushi, burger, or salad");



