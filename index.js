import React, { Component } from 'react';
import { render } from 'react-dom';
import GitUserDetail from './GitUserDetail';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      path: 'narendra-patil'
    };
  }

  changePath = () => {
    this.setState({ path: 'techsith'});
  }

  render() {
    return (
      <div>
        <GitUserDetail path={this.state.path} />
        <button onClick={this.changePath}>Change User</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
