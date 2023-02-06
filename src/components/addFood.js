import React, { useState } from 'react';
import './addFood.css';

function AddFood(props) {
  const [food, setFood] = useState(props);
  const [inputValue, setInputValue] = useState('');
  const handleFoodNameChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFoodSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem('food', JSON.stringify(food));
    setFood({
      ...food,
      test: inputValue,
    });
    setInputValue('');
  };
  return (
    <form className='form-group' onSubmit={handleFoodSubmit}>
      <div className='form-floating d-flex'>
        <input
          type='text'
          className='form-control'
          id='todoItem'
          placeholder='Search for a food'
          aria-label='Food name'
          value={inputValue}
          onChange={handleFoodNameChange}
        />
        <label className='form-label' htmlFor='todoItem'>
          Search for a food
        </label>
        <button type='submit' className='btn btn-primary col-2'>
          <span className='d-flex flex-row justify-content-center align-items-center'>
            <i className='bi bi-plus-circle-dotted col-2'></i>
            &nbsp;Add Food
          </span>
        </button>
        <button type='button' className='btn btn-secondary col-1'>
          <i className='bi bi-three-dots'></i>
        </button>
      </div>
    </form>
  );
}

export default AddFood;
