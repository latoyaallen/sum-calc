import React from 'react';
import './App.css';
import Input from './components/Input';
import Solution from './components/Solution';
import getDifference from './lib/getDifference';
import squareOfSums from './lib/squareOfSums';
import sumOfSquares from './lib/sumOfSquares';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber: 0,
      answer: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({inputNumber: Number(event.target.value)});
  }

  async handleSubmit(event) {
    event.preventDefault();
    // https://stackoverflow.com/questions/40029867/trying-to-implement-a-simple-promise-in-reactjs
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Creating_a_Promise_around_an_old_callback_API
    const getSolution = (inputNumber) => { //2640 when given 10
      return getDifference(squareOfSums(inputNumber), sumOfSquares(inputNumber));
    }

    const returnValue =
      {
        'datetime': 'today',
        'solution': getSolution(this.state.inputNumber),
        'inputNumber': this.state.inputNumber,
        'occurrences': 0,
        'last_datetime': 'yesterday'
      };

    this.setState({ answer: returnValue["solution"] });
  }

  render() {
    return (
      <div className="App">
        <Input
          inputNumber={this.state.inputNumber}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Solution
          answer={this.state.answer}
        />
      </div>
    );
  }
}

export default App;
