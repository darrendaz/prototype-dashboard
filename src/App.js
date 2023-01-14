import React, { Component } from 'react';
// import Navigation from "./components/navigation"

import Meal from './components/meal';
import AddFood from './components/addFood';
// import { Octokit } from 'octokit';

// const app = new Octokit.App({
//   auth: ''
// });

// const octokit = await app.getInstallationOctokit(INSTALLATION_ID);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'To Do List',
      navList: ['Todo List', 'Calculator', 'Weather Forecast'],
      mealEntryIdCounter: 0,
      mealItem: {
        foodName: 'cheeseburger',
        nutrition: {
          calories: 0,
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
      },
      meal: [],
    };
  }

  componentDidMount() {
    // this.setState({
    //   todoItem: '',
    // });
    console.log('hello');
  }

  render() {
    return (
      <div className='container-fluid card col-11'>
        <Meal />
        <AddFood />
      </div>
    );
  }
}

export default App;
