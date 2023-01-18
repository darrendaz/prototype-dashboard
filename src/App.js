import React, { Component } from 'react';
import Meal from './components/meal';

class App extends Component {
  constructor(props) {
    super(props);

    const today = new Date().toDateString();

    this.state = {
      today: today,
      message: 'To Do List',
      navList: ['Todo List', 'Calculator', 'Weather Forecast'],
      mealEntryIdCounter: 0,
      meals: [
        { meal1: [{ name: 'pizza' }, { name: 'pizza' }] },
        { meal2: [{ name: 'pineapple' }, { name: 'pizza' }] },
        { meal3: [{ name: 'pizza' }, { name: 'pizza' }] },
        { meal4: [{ name: 'spaghetti' }, { name: 'pizza' }] },
        { meal5: [{ name: 'pizza' }, { name: 'pizza' }] },
        { meal6: [{ name: 'pizza' }, { name: 'pizza' }] },
      ],
    };
  }

  componentDidMount() {
    // this.setState({
    //   todoItem: '',
    // });
    console.log('component did mount');
  }

  render() {
    const meals = this.state.meals.map((meal, i) => {
      return <Meal key={i} meal={meal} />;
    });
    return (
      <div className='container-fluid col-11'>
        <h1 className='container-fluid card  col-11'>{this.state.today}</h1>
        <div className='container-fluid card col-11'>{meals}</div>
      </div>
    );
  }
}

export default App;
