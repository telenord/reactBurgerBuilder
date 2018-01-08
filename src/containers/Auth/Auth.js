import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';
import * as actions from "../../store/actions/index";
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';
import { checkValidity } from '../../shared/utility';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email'
        },
        value: '',
        validation: {
          require: true,
          isEmail: true
        },
        valid: false,
        errorMessage: null,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          require: true,
          minLength: 6
        },
        valid: false,
        errorMessage: null,
        touched: false,
      },
    },
    formIsValid: false,
    isSignup: false
  };

  componentDidMount() {
    if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
      this.props.onSetAuthRedirectPath();
    }

  }



  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {...this.state.controls};
    const updatedFormElement = {...updatedOrderForm[inputIdentifier]};
    updatedFormElement.value = event.target.value;
    checkValidity(updatedFormElement);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let elem in updatedOrderForm) {
      formIsValid = updatedOrderForm[elem].valid && formIsValid;
    }
    this.setState({controls: updatedOrderForm, formIsValid: formIsValid});
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignup);
  };
  switchAuthModeHanler = () => {
    this.setState(prevState => {
      return {
        isSignup: !prevState.isSignup
      }
    })
  };


  render() {
    const formElementsArray = Object.keys(this.state.controls).map((key) => {
      return {id: key, config: this.state.controls[key]};
    });

    let form = (
      formElementsArray.map(formElement => (
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
      )));

    if (this.props.loading) {
      form = <Spinner/>;
    }
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath}/>;
    }

    return (
      <div className={classes.Auth}>
        {authRedirect}
        <form onSubmit={this.orderHandler}>
          {errorMessage}
          {form}
          <Button btnType="Success"
                  clicked={this.orderHandler}
                  disabled={!this.state.formIsValid}
          >Submit</Button>
        </form>
        <Button btnType="Danger"
                clicked={this.switchAuthModeHanler}
        >SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SignUp'}</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token != null,
    buildingBurger: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);