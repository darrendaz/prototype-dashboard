import React, { Component } from 'react';
// import Navigation from "./components/navigation"

import Meal from './components/meal';
import MealEntryItem from './components/mealEntryItem';
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
          fat: 0,
          carbohydrates: 0,
          cholesterol: 0,
        },
        brand: 'tyson',
        description: '',
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
      <div className='container-fluid'>
        <Meal />
        <MealEntryItem />
      </div>
    );
  }
}

export default App;
