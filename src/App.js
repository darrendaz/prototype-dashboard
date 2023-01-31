import React from 'react';
import Meal from './components/meal';

class App extends React.Component {
  // const [entries, setEntries] = useState(null);
  // const [meals, setMeals] = useState(null);

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
  render() {
    return (
      <div className='container-fluid col-11'>
        <Meal />
      </div>
    );
  }
}

export default App;
