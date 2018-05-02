import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },

    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredientes = {
      ...this.state.ingredients
    };
    updatedIngredientes[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = oldPrice + priceAddition;
    this.setState({ ingredients: updatedIngredientes, totalPrice: newPrice });
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <=0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredientes = {
      ...this.state.ingredients
    };
    updatedIngredientes[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const priceDecretion = INGREDIENT_PRICES[type];
    const newPrice = oldPrice - priceDecretion;
    this.setState({ ingredients: updatedIngredientes, totalPrice: newPrice });
  }

  render () {

    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BurgerControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
