import React from 'react';
import PropTypes from 'prop-types';

const Solution = (props) => (
  <div>
    Solution :
    <p>{props.answer}</p>
  </div>
);

Solution.propTypes = {
  answer: PropTypes.number.isRequired,
};

export default Solution;
