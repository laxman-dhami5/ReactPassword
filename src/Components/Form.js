import React, { useState } from 'react';
import classes from './Form.module.css'; // Import the CSS module

function Form(props) {
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {
      title: title,
      password: password
    };
    props.onSubmit(formData); // Pass form data to the parent component
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const passChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={classes.form}> {/* Add the form class */}
      <form onSubmit={formSubmitHandler}>
        <h3>Enter Details</h3>
        <label htmlFor="title">Title:</label>
        <input type="text" onChange={titleHandler} value={title} required/>
        <label htmlFor="password">Password:</label>
        <input type="password" onChange={passChangeHandler} value={password} required/>
        <button type="submit" className={classes.submit}>Save</button>
        <button type="button" onClick={props.onClose} className={classes.cancel}>Cancel</button> {/* Call handleClose when the button is clicked */}
      </form>
    </div>
  );
}

export default Form;
