import React from 'react';

import classes from './NavigationList.css';
import NavigationItem from './NavigationItem/NavigationItem';

const list = (props) => (
  <ul className={classes.NavigationList}>
    <NavigationItem link="/" exact>BurgerBuilder </NavigationItem>
    {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
    {!props.isAuthenticated ?
      <NavigationItem link="/auth">Auth</NavigationItem> :
      <NavigationItem link="/logout">Logout</NavigationItem>
    }
  </ul>
);
export default list;


