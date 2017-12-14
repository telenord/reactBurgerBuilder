import React, { Component } from 'react';

import Aux from '../../hoc/Aux_/Aux_';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.6,
  meat: 1.3,
  bacon: 0.7,

};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,

  };

  componentDidMount() {
    axios.get('https://burger-order-2ffee.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({
          ingredients: response.data,
        });
      })
      .catch(error => {
          this.setState({
            error: error,
          });
        }
      )
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(ingKey => {
        return ingredients[ ingKey ]
      })
      .reduce((prev, next) => {
        return prev + next;
      }, 0);
    this.setState({purchasable: sum > 0});
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[ type ];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[ type ] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[ type ];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredient = (type) => {
    const oldCount = this.state.ingredients[ type ];
    const updatedCount = oldCount > 0 ? oldCount - 1 : 0;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[ type ] = updatedCount;

    const priceDeduction = INGREDIENT_PRICE[ type ];
    const newPrice = oldCount ? this.state.totalPrice - priceDeduction : this.state.totalPrice;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);

  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };
  purchaseContinueHandler = () => {
    //alert('Continue')

    const queryParams = [];
    for (let i in this.state.ingredients){
      queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]));
    }
    queryParams.push('price='+this.state.totalPrice);
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?'+ queryString
    });
  };

  render() {

    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[ key ] = disabledInfo[ key ] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? <p> Ingredients can't be loaded!</p> : <Spinner/>;

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredient}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = <OrderSummary
        ingredients={this.state.ingredients}
        modalClosed={this.purchaseCancelHandler}
        orderContinue={this.purchaseContinueHandler}
        price={this.state.totalPrice}
      />;
    }

    if (this.state.loading) {
      orderSummary = <Spinner/>;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}

      </Aux>
    );
  };
}

export default withErrorHandler(BurgerBuilder, axios);