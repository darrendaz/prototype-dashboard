import React from 'react';
import './addFood.css';

const AddFood = () => (
  <form className='form-group' onSubmit={''}>
    <div className='form-floating d-flex'>
      {/* <label for='floatingInput'>Email address</label> */}
      <input
        type='text'
        className='form-control'
        id='todoItem'
        placeholder='Food name'
        aria-label='Food name'
        value=''
      />
      <label className='form-label' for='todoItem'>
        Add your food
      </label>
      <button type='submit' className='btn btn-primary col-2'>
        Add Food
      </button>
    </div>
  </form>
);

export default AddFood;
