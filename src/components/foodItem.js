import React, { Component } from 'react';

const foodItem = {
  id: 0,
  name: 'double double',
  nutrition: {
    calories: 23,
    protein: 0,
    carbohydrates: {
      total: 0,
      fiber: 0,
      sugar: 0,
    },
    fats: {
      total: 0,
      saturated: 0,
      polyunsaturated: 0,
      monounsaturated: 0,
      trans: 0,
    },
    cholesterol: 0,
    sodium: 0,
    potassium: 0,
    vitaminA: 0,
    vitaminC: 0,
    calcium: 0,
    iron: 0,
  },
  brand: {
    name: 'tyson',
  },
  description: '',
  serving: {
    size: {},
  },
  buy: {},
};

class FoodItem extends Component {
  foodItemFactory = () => {
    const name = this.props.name;
    const nutrition = this.props.nutrition;
    return (
      <tr>
        <td>{name}</td>
        <td>{nutrition.protein}</td>
        <td>{nutrition.carbohydrates.total}</td>
        <td>{nutrition.fats.total}</td>
        <td>{nutrition.calories}</td>
      </tr>
    );
  };

  render() {
    console.log(foodItem);
    return (
      <table className='meal-table table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Food Item</th>
            <th scope='col'>P</th>
            <th scope='col'>C</th>
            <th scope='col'>F</th>
            <th scope='col'>Cals</th>
          </tr>
        </thead>
        <tbody>{this.foodItemFactory}</tbody>
      </table>
    );
  }
}

export default FoodItem;
