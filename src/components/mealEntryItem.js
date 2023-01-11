import React from 'react';

const MealEntryItem = () => (
  <div className='container-fluid'>
    <form className='form-group' onSubmit={''}>
      <div className='form-row'>
        <label className='col-2 col-form-label' htmlFor='todoItem'>
          Add your food
        </label>
      </div>
      <div className='form-row'>
        <input
          type='text'
          className='form-control col-4'
          id='todoItem'
          placeholder='ex. peanut butter, apple, pancake'
          value={''}
        />
        <button type='submit' className='btn btn-primary'>
          Add Item
        </button>
        <button type='button' className='btn btn-secondary'>
          Clear List
        </button>
      </div>
    </form>
  </div>
);

export default MealEntryItem;
