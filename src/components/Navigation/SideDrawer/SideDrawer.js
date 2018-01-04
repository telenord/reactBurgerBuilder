import React from 'react';
import classes from './SideDrawer.css';
import NavigationList from '../NavigationList/NavigationList';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux_/Aux_';


const sideDrawer = (props) => {
    const attachedClasses = [classes.SideDrawer];
    const attachedClass =  props.open ? classes.Open: classes.Close;
    attachedClasses.push(attachedClass);
  console.log(props);
  return (
        <Aux>
            <Backdrop
                show={props.open}
                clicked={props.closed}
            />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationList isAuthenticated={props.isAuth}/>
                </nav>

            </div>
        </Aux>
    );
};

export default sideDrawer;


