import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/signup'>
            <SignupPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
