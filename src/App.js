import React, { useState, useEffect } from 'react';
// import Meal from './components/meal';

function App() {
  const [count, setCount] = useState(0);
  const [currentTemp, setCurrentTemp] = useState('Click Update Weather');
  // const [weather, setWeather] = useState(null);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const handleWeatherUpdate = () => {
    let currentLat;
    let currentLon;

    const WEATHER_API_KEY = '3b240c01331fab696342b93cba6c4d44';

    navigator.geolocation.getCurrentPosition((position) => {
      currentLat = position.coords.latitude;
      currentLon = position.coords.longitude;
      let getWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLon}&appid=${WEATHER_API_KEY}&units=imperial`;

      fetch(getWeatherURL)
        .then((res) => res.json())
        .then((weatherData) =>
          setCurrentTemp(Math.round(weatherData.main.temp))
        );
    });
  };

  // WIP template for state obj
  // {
  //   today: today,
  //   foodItemIdCounter: 0,
  //   foodItem: '',
  //   message: 'To Do List',
  //   navList: ['Todo List', 'Calculator', 'Weather Forecast'],
  //   mealEntryIdCounter: 0,
  //   mealList: [],
  //   weatherData: {},
  // };

  // const handleAddFood = (e) => {
  //   e.preventDefault();

  //   const mealItemId = this.state.mealItemIdCounter + 1;

  //   const mealItemObj = {
  //     id: mealItemId,
  //     name: e.target.mealItem.value,
  //     completed: false,
  //     nutrition: {
  //       calories: 23,
  //       protein: 0,
  //       carbohydrates: {
  //         total: 0,
  //         fiber: 0,
  //         sugar: 0,
  //       },
  //       fats: {
  //         total: 0,
  //         saturated: 0,
  //         polyunsaturated: 0,
  //         monounsaturated: 0,
  //         trans: 0,
  //       },
  //       cholesterol: 0,
  //       sodium: 0,
  //       potassium: 0,
  //       vitaminA: 0,
  //       vitaminC: 0,
  //       calcium: 0,
  //       iron: 0,
  //     },
  //     brand: {
  //       name: 'tyson',
  //     },
  //     description: '',
  //     serving: {
  //       size: {},
  //     },
  //     buy: {},
  //   };

  //   this.setState({
  //     todoItem: '',
  //     todoItemIdCounter: mealItemId,
  //     todoList: [...this.state.meals, mealItemObj],
  //   });
  // };

  // const meals = this.state.meals.map((meal, i) => {
  //   return <Meal key={i} meal={meal} />;
  // });

  return (
    <div className='container-fluid col-11'>
      <div className='container-fluid col-8'>
        <h1 className='container-fluid card current-weather'>{currentTemp}℉</h1>
        <p>You clicked {count} times</p>
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => {
            handleWeatherUpdate();
            setCount(count + 1);
          }}>
          Update Weather
        </button>

        <p>You clicked {count} times</p>
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>

      {/* <div className='container-fluid card col-11 meals-container'>{meals}</div> */}
    </div>
  );
}

export default App;
