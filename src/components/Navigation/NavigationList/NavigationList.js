import React from 'react';

import classes from './NavigationList.css';
import NavigationItem  from './NavigationItem/NavigationItem';

const list = (props) => (
    <ul className={classes.NavigationList}>
        <NavigationItem
            link="/"
            active={true}
        >BurgerBuilder </NavigationItem>
        <NavigationItem
            link="/c"
         >Checkout</NavigationItem>
    </ul>
);
export default list;


