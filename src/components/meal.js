import React from 'react';

const Meal = ({ message }) => (
  <table className='table table-striped'>
    <thead>
      <tr>
        <th scope='col'>Food</th>
        <th scope='col'>P</th>
        <th scope='col'>C</th>
        <th scope='col'>F</th>
        <th scope='col'>Cals</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>Roasted Zucchini</th>
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
);

export default Meal;
