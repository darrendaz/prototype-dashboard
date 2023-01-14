import React from 'react';
import './addFood.css';

const AddFood = () => (
  <form className='form-group' onSubmit={''}>
    <div className='form-row'>
      <label className='col-2 col-form-label' htmlFor='todoItem'>
        Add your food
      </label>
    </div>
    <div className='form-row d-flex justify-content-start'>
      <input
        type='text'
        className='form-control'
        id='todoItem'
        placeholder='ex. peanut butter, apple, pancake'
        value={''}
      />
      <button type='submit' className='btn btn-primary col-1'>
        Add Item
      </button>
      <button type='button' className='btn btn-secondary col-1'>
        Clear List
      </button>
    </div>
  </form>
);

export default AddFood;
