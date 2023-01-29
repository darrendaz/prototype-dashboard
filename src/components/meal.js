import React, { Component } from 'react';
import AddFood from './addFood';

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
          <tbody>
            <tr>
              <th scope='row'>{name}</th>
              <td>{nutrition.protein}g</td>
              <td>{nutrition.carbohydrates.total}g</td>
              <td>{nutrition.fats.total}g</td>
              <td>{nutrition.calories}</td>
            </tr>
            <tr>
              <th scope='row'>Chicken Breast - Baked</th>
              <td>{`40g`}g</td>
              <td>{`40g`}g</td>
              <td>{`40g`}g</td>
              <td>{400}</td>
            </tr>
            <tr>
              <th scope='row'>Jasmine Rice</th>
              <td>{`40g`}g</td>
              <td>{`40g`}g</td>
              <td>{`40g`}g</td>
              <td>{200}</td>
            </tr>
          </tbody>
        </table>
        <AddFood />
      </div>
    );
  }
}

export default Meal;
