import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {

  let trasformedIngredients = Object.keys(props.ingredients).map(igkey =>{
    return [...Array(props.ingredients[igkey])].map((_, i) => {
      return <BurgerIngredient key={igkey+i} type={igkey} />
    });
  }).reduce((arr, el) => {
   return arr.concat(el);
  },[]);

  if (trasformedIngredients.length === 0) {
    trasformedIngredients = <p>Please add some ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {trasformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;
