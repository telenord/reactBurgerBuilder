import React from 'react';
import Aux from '../../../hoc/Aux_';
import Button from '../../../components/UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((ingKey) => {
        return (<li key={ingKey}>
            <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
        </li>);
    });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicios burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.modalClosed}>Cancel</Button>
            <Button btnType="Success" clicked={props.orderContinue}>Order</Button>
        </Aux>
        );

};
export default orderSummary;


