import React, { useState } from 'react';
import AddFood from './addFood';
import FoodItem from './foodItem';
import mealsData from './mealsData';

function Meal() {
  const [meals] = useState(mealsData);
  const [meal1] = useState(meals[1]);

  const foodList = meal1.map((food, i) => {
    return (
      <FoodItem
        key={i}
        foodId={food.id}
        name={food.name}
        brand={food.brand}
        nutrition={food.nutrition}
      />
    );
  });

  const totalProtein = meal1.reduce(
    (acc, food) => acc + food.nutrition.protein,
    0
  );
  return (
    <div className='meal-container'>
      <table className='meal-table table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Food Item</th>
            <th scope='col'>Brand / Restaurant </th>
            <th scope='col'>P</th>
            <th scope='col'>C</th>
            <th scope='col'>F</th>
            <th scope='col'>Cals</th>
          </tr>
        </thead>
        <tbody>{foodList}</tbody>
        <tfoot>
          <tr>
            <td>Meal Total</td>
            <td></td>
            <td>{totalProtein}</td>
            <td>C</td>
            <td>F</td>
            <td>Cals</td>
          </tr>
        </tfoot>
      </table>
      <AddFood />
    </div>
  );
}

export default Meal;
