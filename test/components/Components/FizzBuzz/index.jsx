import React, { Component, PropTypes } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class FizzBuzzComponent extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
  }

  render() {
    const { count } = this.props;
    let fizzbuzz = '';
    if (count % 3 === 0) { fizzbuzz += 'Fizz'; }
    if (count % 5 === 0) { fizzbuzz += 'Buzz'; }
    if (fizzbuzz === '') { fizzbuzz = count; }
    return (
      <div>
        <p>{fizzbuzz}</p>
      </div>
    );
  }
}

export default FizzBuzzComponent;
