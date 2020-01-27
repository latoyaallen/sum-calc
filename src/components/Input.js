import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <input type="text" value={props.inputNumber} onChange={props.handleChange} placeholder="Your Number" />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

Input.propTypes = {
  inputNumber: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Input;
