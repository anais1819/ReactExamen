 // src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventList from './components/EventList';
import EventForm from './components/EventForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/events" component={EventList} />
        <Route path="/create-event" component={EventForm} />
          
      </Switch>
    </Router>
  );
}

export default App;
