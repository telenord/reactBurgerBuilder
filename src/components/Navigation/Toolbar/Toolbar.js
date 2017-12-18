import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationList from '../../Navigation/NavigationList/NavigationList';
import NavToggle from '../../Navigation/NavToggle/NavToggle';


const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <NavToggle clicked={props.toggleSideDrawer}/>
    <div className={classes.Logo}>
      <Logo/>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationList/>
    </nav>

  </header>
);
export default toolbar;


