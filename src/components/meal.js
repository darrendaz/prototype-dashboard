import React, { Component } from 'react';
import AddFood from './addFood';
import FoodItem from './foodItem';

class Meal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: 'Ckicken Breast - Cooked',
      completed: false,
      nutrition: {
        calories: 23,
        protein: 43,
        carbohydrates: {
          total: 34,
          fiber: 0,
          sugar: 0,
        },
        fats: {
          total: 12,
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
  }

  render() {
    const name = this.state.name;
    const nutrition = { ...this.state.nutrition };

    console.log(nutrition);
    return (
      <div className='meal-container'>
        <FoodItem name={name} nutrition={nutrition} />
        <AddFood />
      </div>
    );
  }
}

export default Meal;
