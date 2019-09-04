import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
    }
  
 componentDidMount() {
fetch('https://api.github.com/users/michelangeloxo')
.then(res => res.json())
.then(data => console.log(data));  
}

  render() {

  return (
    <div className="App">

    </div>
  );
}
}
export default App;
