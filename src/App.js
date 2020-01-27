import React from 'react';
import './App.css';
import Input from './components/Input';
import Solution from './components/Solution';
import mockAsyncCall from './api/mockAsyncCall';

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
    try {
      const request = { method:'get', body:{ inputNumber: this.state.inputNumber } };
      const response = await mockAsyncCall(request);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      this.setState({ answer: response.answer.solution });
    } catch (error) {
      console.log(error);
    }
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
