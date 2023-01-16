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

    const today = new Date().toDateString();

    this.state = {
      today: today,
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
    console.log('component did mount');
  }

  render() {
    return (
      <div className='container-fluid card col-11'>
        <h1>{this.state.today}</h1>
        <Meal id={1} name='Meal 1' />
        <AddFood />
        <Meal id={2} name='Meal 2' />
        <AddFood />
        <Meal id={3} name='Meal 3' />
        <AddFood />
        <Meal id={4} name='Meal 4' />
        <AddFood />
        <Meal id={5} name='Meal 5' />
        <AddFood />
        <Meal id={6} name='Meal 6' />
        <AddFood />
      </div>
    );
  }
}

export default App;
