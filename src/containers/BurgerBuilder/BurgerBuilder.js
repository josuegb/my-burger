import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal'

import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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

    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => (sum + el), 0);

    this.setState({purchasable: sum > 0});
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
    this.updatePurchaseState(updatedIngredientes);
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
    this.updatePurchaseState(updatedIngredientes);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    alert('You Continue');
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
        <Modal
          show={this.state.purchasing}
          closeModal={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseContinue={this.purchaseContinueHandler}
            purchaseCancel={this.purchaseCancelHandler}
            price={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BurgerControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          order={this.purchaseHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
