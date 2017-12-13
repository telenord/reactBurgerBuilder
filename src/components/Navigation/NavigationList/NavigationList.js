import React from 'react';

import classes from './NavigationList.css';
import NavigationItem from './NavigationItem/NavigationItem';

const list = (props) => (
  <ul className={classes.NavigationList}>
    <NavigationItem link="/" exact
    >BurgerBuilder </NavigationItem>
    <NavigationItem
      link="/orders"
    >Orders</NavigationItem>
  </ul>
);
export default list;


