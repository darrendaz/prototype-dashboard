import React, { Component } from 'react';
import Meal from './components/meal';

const getWeatherKey = 'dec6459938d398a140c7e3eedf4f4959';

let lon;
let lat;

navigator.geolocation.getCurrentPosition((position) => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
});

console.log(lat, lon);

const getWeatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${getWeatherKey}`;
console.log(getWeatherUrl);

fetch(getWeatherUrl).then((response) => console.log(response));

class App extends Component {
  constructor(props) {
    super(props);

    const today = new Date().toDateString();

    this.state = {
      today: today,
      foodItemIdCounter: 0,
      foodItem: '',
      message: 'To Do List',
      navList: ['Todo List', 'Calculator', 'Weather Forecast'],
      mealEntryIdCounter: 0,
      mealList: [],
    };
  }

  componentDidMount() {
    // this.setState({
    //   todoItem: '',
    // });
    console.log('component did mount');
  }

  handleAddFood(e) {
    e.preventDefault();

    const mealItemId = this.state.todoItemIdCounter + 1;

    const mealItemObj = {
      id: mealItemId,
      name: e.target.mealItem.value,
      completed: false,
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

    this.setState({
      todoItem: '',
      todoItemIdCounter: mealItemId,
      todoList: [...this.state.meals, mealItemObj],
    });
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
