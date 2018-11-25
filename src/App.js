import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu'
import firebase from './firebase.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
  const itemsRef = firebase.database().ref('testGame/village_chat/day 1/messages');
  const item = {
    title: 'title',
    user: 'username'
  };
  itemsRef.push(item);
}

  render() {
    return (
      <div>
        <div id="outer-container">
          <Menu
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            isOpen
            noOverlay
            disableOverlayClick={false}
          >
            <h3>Hello, Mod</h3>
            <button onClick={() => this.handleSubmit()}>New Post</button>
            <p>Home</p>
            <p>Chats</p>
            <p>Votes</p>
            <p>Review</p>
            <p>Profile</p>
            <p>Logout</p>
          </Menu>
        </div>
        <main id="page-wrap">
          <div>
           DONT CLICK ME!
          </div>
        </main>
      </div>
    );
  }
}

export default App;
