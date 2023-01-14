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
        placeholder='Search for a food'
        aria-label='Food name'
        value=''
      />
      <label className='form-label' for='todoItem'>
        Search for a food
      </label>
      <button type='submit' className='btn btn-primary col-2'>
        <span className='d-flex flex-row justify-content-center align-items-center'>
          <i class='bi bi-plus-circle-dotted'></i>
          &nbsp;Add Food
        </span>
      </button>
      <button type='submit' className='btn btn-secondary col-2'>
        Scan a Barcode
      </button>
    </div>
  </form>
);

export default AddFood;
