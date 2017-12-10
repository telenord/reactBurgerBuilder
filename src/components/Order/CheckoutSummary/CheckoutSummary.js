import React from 'react';

import classes from './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => (
  <div className={classes.CheckoutSummary}>
    <h1>We hope it tastes well!</h1>
    <div style={{ margin: 'auto'}}>
      <Burger ingredients={props.ingredients} />
      <Button
        btnType="Danger"
        clicked={props.checkoutCancel}
      >Cancel</Button>
      <Button
        btnType="Success"
        clicked={props.checkoutContinue}
      >Continue</Button>

    </div>
  </div>
);
export default checkoutSummary;