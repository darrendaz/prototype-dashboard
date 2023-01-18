import React from 'react';
import AddFood from './addFood';

const Meal = (props) => (
  <div className='meal-container'>
    <table className='meal-table table table-striped'>
      <thead>
        <tr>
          <th scope='col'>Food Item</th>
          <th scope='col'>P</th>
          <th scope='col'>C</th>
          <th scope='col'>F</th>
          <th scope='col'>Cals</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>{props.id}</th>
          <td>{`40g`}</td>
          <td>{`40g`}</td>
          <td>{`40g`}</td>
          <td>{400}</td>
        </tr>
        <tr>
          <th scope='row'>Chicken Breast - Baked</th>
          <td>{`40g`}</td>
          <td>{`40g`}</td>
          <td>{`40g`}</td>
          <td>{400}</td>
        </tr>
        <tr>
          <th scope='row'>Jasmine Rice</th>
          <td>{`40g`}</td>
          <td>{`40g`}</td>
          <td>{`40g`}</td>
          <td>{200}</td>
        </tr>
      </tbody>
    </table>
    <AddFood />
  </div>
);

export default Meal;
