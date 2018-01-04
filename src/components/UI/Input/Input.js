import React from 'react';
import classes from './Input.css';

const input = (props) => {
  let validationError = null;
  let inputElement = null;

  const classesArr = [classes.InputElement];
  if (props.invalid && props.touched && props.shouldValidate) {
    classesArr.push(classes.Invalid);
    validationError = <p className={classes.ValidationError}>{props.errorMessage}</p>;
  }
  const inputClasses = classesArr.join(' ');

  switch (props.elementType) {
    case('input'):
      inputElement = <input
        className={inputClasses}
        {...props.elementConfig}
        value={props.elementConfig.value}
        onChange={props.changed}/>;
      break;
    case('textarea'):
      inputElement = <textarea
        className={inputClasses}
        {...props.elementConfig}
        value={props.elementConfig.value}
        onChange={props.changed}/>;
      break;
    case('select'):
      inputElement = (<select
        className={inputClasses}
        value={props.elementConfig.value}
        onChange={props.changed}>
        {props.elementConfig.options.map(option => (
          <option key={option.value} value={option.value}>{option.displayValue}</option>
        ))}
      </select>);
      break;
    default:
      inputElement = <input
        className={inputClasses}
        {...props.elementConfig}
        value={props.elementConfig.value}
        onChange={props.changed}/>;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );

};

export default input;
