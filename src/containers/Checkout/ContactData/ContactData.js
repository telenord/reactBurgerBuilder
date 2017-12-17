import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false,
  };

  onSubmitHandler = (event) =>{

  };
  orderHandler =(event)=>{
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {

      },
      deliveryMethid: 'fastest',
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

  render() {
    let form =(
      <form onSubmit={this.onSubmitHandler}>
        <input type="text" name="name" placeholder="Your name"/>
        <input type="email" name="email" placeholder="Your email"/>
        <input type="text" name="street" placeholder="Your street"/>
        <input type="text" name="postal" placeholder="Your postalCode"/>
        <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
      </form>
    );
    if (this.state.loading){
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

export default ContactData;