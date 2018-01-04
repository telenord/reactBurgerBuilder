import React from 'react';
import classes from './Order.css';


const name = (props) => {

   let ingredients = Object.keys(props.ingredients).map(i=>{
     return {name: i, ammount: props.ingredients[i] }
   }).map( ing => {
     return <p className={classes.OrderIngredient} key={ing.name}>{ing.name} - {ing.ammount}</p>;
       });


  return(
    <div className={classes.Order}>
      <p>Ingredients: </p>
      {ingredients}
      <p>Price <strong>{props.price.toFixed(2)}</strong></p>
    </div>
  );
};
export default name;