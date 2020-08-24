import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header'
import './App.css';
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButton';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/chat/:person'>
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeButton />
          </Route>
        </Switch>

        {/* Tinder Cards */}

        {/* Buttons below tinder cards */}

        {/* Chat screen */}

        {/* Individual chat screen */}

      </Router>
    </div>
  );
}

export default App;
