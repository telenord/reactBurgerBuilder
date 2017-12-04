import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const name = (props) => {
    let ingredients = Object.keys(props.ingredients)
        .map( igKeys=>{
            console.log(igKeys);
            return [...Array(props.ingredients[igKeys])].map((_, i)=>{
                return <BurgerIngredient key={igKeys+i} type={igKeys} />
        });
    });

return(
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {ingredients}
        <BurgerIngredient type="bread-bottom"/>
    </div>
);
};
export default name;