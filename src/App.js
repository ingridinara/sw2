import React, { useState } from 'react';
// components
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SpacecraftList from './SpacecraftList';
import SpacecraftDetail from './SpaceCraftDetail';
import CharacterList from './CharacterList';
import Footer from './Footer';
import Fetch from './Fetch';
import FetchCharacters from './FetchCharacters';

// routes
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div>
              <Header />
              <SignIn />
              <Footer />
            </div>
          </Route>
          <Route path="/signup" exact>
            <Header />
            <SignUp />
            <Footer />
          </Route>
          <ProtectedRoute path="/home">
            <Header />
            <Fetch />
            <Footer />
          </ProtectedRoute>
          <Route path="/characterlist" exact>
            <Header />
            <FetchCharacters />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
