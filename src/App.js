import React, { Component } from 'react';
// import Meal from './components/meal';

let currentLat;
let currentLon;
const WEATHER_API_KEY = '3b240c01331fab696342b93cba6c4d44';

navigator.geolocation.getCurrentPosition((position) => {
  currentLat = position.coords.latitude;
  currentLon = position.coords.longitude;
});

const handleClick = () => {
  let getWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLon}&appid=${WEATHER_API_KEY}&units=imperial`;

  console.log(getWeatherURL);
  fetch(getWeatherURL)
    .then((res) => res.json())
    .then((data) => console.log(data.main.temp, data.name));
};

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
    // const meals = this.state.meals.map((meal, i) => {
    //   return <Meal key={i} meal={meal} />;
    // });
    return (
      <div className='container-fluid col-11'>
        <h1 className='container-fluid card  col-11' onClick={handleClick}>
          {this.state.today}
        </h1>
        <div className='container-fluid card col-11'>meals go here</div>
      </div>
    );
  }
}

export default App;
