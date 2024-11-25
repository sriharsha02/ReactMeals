import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    description: "Cottage cheese cooked in a rich tomato-based creamy curry.",
    price: 25,
  },
  {
    id: 2,
    name: "Veg Biryani",
    description:
      "Aromatic basmati rice cooked with mixed vegetables and spices.",
    price: 18,
  },
  {
    id: 3,
    name: "Aloo Gobi",
    description:
      "A simple and flavorful dish of potatoes and cauliflower cooked with Indian spices.",
    price: 15,
  },
  {
    id: 4,
    name: "Matar Paneer",
    description: "Cottage cheese and green peas in a spiced tomato gravy.",
    price: 20,
  },
  {
    id: 5,
    name: "Vegetable Manchurian",
    description: "Fried vegetable balls tossed in a tangy Indo-Chinese sauce.",
    price: 220,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
