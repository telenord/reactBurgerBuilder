import React from 'react';
import classes from './Button.css';

const button = (props) => {

  const classesArr = [classes.Button, classes[props.btnType]];
  if (props.disabled){
    classesArr.push(classes.Disabled);
  }
  const btnClasses = classesArr.join(' ');

    return(
      <button
        className={btnClasses}
        disabled={props.disabled}
        onClick={props.clicked}
      >
        {props.children}
      </button>
    );
};


export default button;


