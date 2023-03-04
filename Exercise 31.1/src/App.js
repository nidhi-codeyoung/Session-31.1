import React, { Component } from 'react';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h3>Hello, Students!</h3>
          <h4>This Exercise explains about State Life Cycle Methods:</h4>
          <p>In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.<br></br><br></br>

We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.<br></br><br></br>

We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.<br></br><br></br>

We can declare special methods on the component class to run some code when a component mounts and unmounts:</p><br></br>

<h2>This Clock Timer is using the State Life Cycle Methods:</h2>
          <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
        </div>
      );
    }
  }
  
  export default App;

