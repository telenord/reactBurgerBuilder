import React from 'react';
import classes from './Order.css';


const name = (props) => {
  // TODO 213
   let ingredients = Object.keys(props.ingredients).join(' ' )
  // .map(igKeys => {
  //   return [...Array(props.ingredients[igKeys])].map((_, i) => {
  //     return <p key={igKeys + i} type={igKeys}>{igKeys}</p>
  //   });
  // })

  return(
    <div className={classes.Order}>
      <p>Ingredients: </p>
      <p> {ingredients}</p>
      <p>Price <strong>{props.price.toFixed(2)}</strong></p>
    </div>
  );
}
export default name;