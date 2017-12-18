import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux_/Aux_';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import * as actionType from "../../store/actions";
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';



class BurgerBuilder extends Component {
  state = {
    totalPrice: 4,
    purchasable: false,
    purchasing: false,

    };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(ingKey => {
        return ingredients[ingKey]
      })
      .reduce((prev, next) => {
        return prev + next;
      }, 0);
    return sum > 0;
  };


  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };
  purchaseContinueHandler = () => {
    this.props.history.push('./checkout');
  };

  render() {

    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.props.ings}
            modalClosed={this.purchaseCancelHandler}
            orderContinue={this.purchaseContinueHandler}
            price={this.props.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.props.ings}/>
        <BuildControls
          ingredientAdded={this.props.onIngerdientAdded}
          ingredientRemoved={this.props.onIngerdientRemove}
          disabled={disabledInfo}
          price={this.props.totalPrice}
          purchasable={this.updatePurchaseState(this.props.ings)}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  };
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    totalPrice: state.totalPrice,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIngerdientAdded: (ingName) => dispatch({type: actionType.ADD_INGREDIENT, ingredientName: ingName}),
    onIngerdientRemove: (ingName) => dispatch({type: actionType.REMOVE_INGREDIENT, ingredientName: ingName})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));