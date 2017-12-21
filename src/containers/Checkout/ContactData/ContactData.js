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
        value: '',
        validation: {
          require: true
        },
        valid: false,
        errorMessage: null,
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email'
        },
        value: '',
        validation: {
          require: true
        },
        valid: false,
        errorMessage: null,
        touched: false,
      },

      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your street'
        },
        value: '',
        validation: {
          require: true
        },
        valid: false,
        errorMessage: null,
        touched: false,
      },
      postalCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your postalCode'
        },
        value: '',
        validation: {
          require: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        errorMessage: null,
        touched: false,
       
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your country'
        },
        value: '',
        validation: {
          require: true
        },
        valid: false,
        touched: false,        
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'},
          ]
        },
        value: 'fastest',
        validation: {},
        errorMessage: null,
        valid: true,
      },
    },
    formIsValid: false,
    loading: false,
  };

  checkValidity(elem) {
    let isValid = true;

    if (!elem.validation) {
      return elem.valid = true;
    }

    if (elem.validation.require) {
      isValid = elem.value.trim() !== '' && isValid;
      elem.errorMessage = isValid ? elem.errorMessage : 'Enter text';
    }
    if (elem.validation.minLength) {
      isValid = elem.value.length >= elem.validation.minLength && isValid;
      elem.errorMessage = isValid ? elem.errorMessage : `MinLength is ${elem.validation.minLength}`;
    }
    if (elem.validation.maxLength) {
      isValid = elem.value.length <= elem.validation.maxLength && isValid;
      elem.errorMessage = isValid ? elem.errorMessage : `MaxLength is ${elem.validation.minLength}`;
    }
    elem.valid = isValid;
    return elem;
  }


  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const formData = {};

    Object.keys(this.state.orderForm).forEach((key) => {
      formData[key] = this.state.orderForm[key].value;
    });


    const order = {
      ingredients: this.props.ings,
      price: this.props.totalPrice,
      orderData: formData,
    };

    axios.post('/orders.json', order)
      .then(respose => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
      });
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {...this.state.orderForm};
    const updatedFormElement = {...updatedOrderForm[inputIdentifier]};
    updatedFormElement.value = event.target.value;
    this.checkValidity(updatedFormElement);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let elem in updatedOrderForm) {
      formIsValid = updatedOrderForm[elem].valid && formIsValid;
    }

    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});

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
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            errorMessage={formElement.config.errorMessage}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}

        <Button btnType="Success"
                clicked={this.orderHandler}
                disabled={!this.state.formIsValid}
        >Order</Button>
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