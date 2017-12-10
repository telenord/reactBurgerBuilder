import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';


const list = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={props.link}
            className={props.active ? classes.active : null}
            activeClassName={classes.active}

        >
            {props.children}
        </NavLink>
    </li>
);
export default list;
