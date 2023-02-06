import React, { Component } from 'react';

class FoodItem extends Component {
  render() {
    const foodItemFactory = () => {
      const name = this.props.name;
      const brandName = this.props.brand.name;
      const nutrition = this.props.nutrition;

      return (
        <tr>
          <td>{name}</td>
          <td>{brandName}</td>
          <td>{nutrition.protein}</td>
          <td>{nutrition.carbohydrates.total}</td>
          <td>{nutrition.fats.total}</td>
          <td>{nutrition.calories}</td>
        </tr>
      );
    };

    return foodItemFactory();
  }
}

export default FoodItem;
