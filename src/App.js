import React, { Component } from 'react';

import MessagesList from './containers/MessagesList';
import AddMessage from './containers/AddMessage';
import SideBar from './containers/SideBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container" id="container">
        <SideBar/>
        <section id="main">
         <MessagesList/>
          <AddMessage/>
        </section>
      </div>
    );
  }
}

export default App;
