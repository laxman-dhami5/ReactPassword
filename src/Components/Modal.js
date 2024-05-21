import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Form from './Form';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
      </div>
      <Form onSubmit={props.onSubmit} onClose={props.onClose} /> {/* Pass onSubmit and onClose props to the Form component */}
    </div>
  );
};

const modalRoot = document.getElementById('modal');

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modalRoot)}
      {ReactDOM.createPortal(<ModalOverlay onSubmit={props.onSubmit} onClose={props.onClose}>{props.children}</ModalOverlay>, modalRoot)}
    </Fragment>
  );
}

export default Modal;
