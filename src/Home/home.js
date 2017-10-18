import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <h1>Tuesday Temptation</h1>
        </div>
        <div>
          <a href="/links">Links >></a>
        </div>
      </div>
    );
  }
}

export default Home;
