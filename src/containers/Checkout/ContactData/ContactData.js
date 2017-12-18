import React, { Component } from 'react';
import { connect } from "react-redux";

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Input from "../../../components/UI/Input/Input";
import Spinner from '../../../components/UI/Spinner/Spinner';


class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email'
        },
        value: ''
      },

      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your street'
        },
        value: ''
      },
      postalCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your postalCode'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your country'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'},
          ]

        },
        value: ''
      },
    },

    loading: false,
  };




  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ings,
      price: this.props.totalPrice,
      customer: {},
      deliveryMethod: 'fastest',
    };
    axios.post('/orders.json', order)
      .then(respose => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
      })
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {...this.state.orderForm};
    const updatedFormElement = {...updatedOrderForm[inputIdentifier]};
    updatedFormElement.value = event.target.value;

    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({orderForm: updatedOrderForm});

  };

  render() {
    const formElementsArray = Object.keys(this.state.orderForm).map((key) => {
      return {id: key, config: this.state.orderForm[key]};
    });

    let form = (
      <form onSubmit={this.orderHandler}>

        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => formElement.inputChangedHandler(event, formElement.id)}
          />
        ))}

        <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner/>;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    totalPrice: state.totalPrice
  }
};

export default connect(mapStateToProps)(ContactData);