import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container" id="container">
        <div className="sidebar" id="sidebar">Users</div>
        <section id="main">
          <section id="message-list">Messages List</section>
          <section id="new-message">New Message</section>
        </section>
      </div>
    );
  }
}

export default App;
