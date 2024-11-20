import React from "react";
import classes from "./AvailableMeals.module.css";
const DUMMY_MEALS = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    description: "Cottage cheese cooked in a rich tomato-based creamy curry.",
    price: 250,
  },
  {
    id: 2,
    name: "Veg Biryani",
    description:
      "Aromatic basmati rice cooked with mixed vegetables and spices.",
    price: 180,
  },
  {
    id: 3,
    name: "Aloo Gobi",
    description:
      "A simple and flavorful dish of potatoes and cauliflower cooked with Indian spices.",
    price: 150,
  },
  {
    id: 4,
    name: "Matar Paneer",
    description: "Cottage cheese and green peas in a spiced tomato gravy.",
    price: 200,
  },
  {
    id: 5,
    name: "Vegetable Manchurian",
    description: "Fried vegetable balls tossed in a tangy Indo-Chinese sauce.",
    price: 220,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    <li>{meal.name}</li>;
  });
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
