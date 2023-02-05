import React, { useState } from 'react';
import './addFood.css';

function AddFood() {
  const [value, setValue] = useState('');
  const handleFoodNameChange = (e) => {
    setValue(e.target.value);
  };

  const handleFoodSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem('food', JSON.stringify(value));
    setValue('');
  };
  return (
    <form className='form-group' onSubmit={handleFoodSubmit}>
      <div className='form-floating d-flex'>
        {/* <label for='floatingInput'>Email address</label> */}
        <input
          type='text'
          className='form-control'
          id='todoItem'
          placeholder='Search for a food'
          aria-label='Food name'
          value={value}
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
