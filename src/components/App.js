import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';

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
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
