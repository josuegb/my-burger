import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => (
      <li key={igKey} style={{textTransform: 'capitalize'}}>
        <span>{igKey}:</span> {props.ingredients[igKey]}
      </li>
    ));

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
    </Aux>
  );
};

export default orderSummary;
