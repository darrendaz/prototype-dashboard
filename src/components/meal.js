import React, { Component } from 'react';
import AddFood from './addFood';

class Meal extends Component {
  constructor(props) {
    super(props);

    this.state = { meal: props.meal };
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    return (
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
              <th scope='row'>{this.props.meal}</th>
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
  }
}

export default Meal;
