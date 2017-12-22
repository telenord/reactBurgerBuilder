import React, { Component } from 'react';
import Order from "../../components/Order/Order";
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as ordersActions from '../../store/actions';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Aux_/Aux_';


class Orders extends Component {

  componentDidMount() {
    this.props.onInitOrders();
  }

  render() {
    let orders = <Spinner/>;

    if (!this.props.loading && this.props.orders) {

      orders = (
        <Aux>
          {this.props.orders.map(order => (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={+order.price}
            />
          ))}
        </Aux>
      );
    }

    return (
      <Aux>
        {orders}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    error: state.order.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onInitOrders: () => dispatch(ordersActions.fetchOrders())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));