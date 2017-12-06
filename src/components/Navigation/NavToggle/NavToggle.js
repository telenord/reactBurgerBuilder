import React from 'react';
import classes from './NavToggle.css';

const name = (props) => (
    <button className={classes.NavToggle}
    onClick={props.clicked}>
        <span></span>
        <span></span>
        <span></span>
    </button>
);
export default name;


