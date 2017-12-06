import React from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux_'

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
             style={{
                 //display: props.show? 'block': 'none'
                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0',
             }}>
            {props.children}
        </div>
    </Aux>
);
export default modal;


