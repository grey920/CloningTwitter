import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UserList from './pages/UserList';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <>
      <Route component={MainPage} exact path="/" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={UserList} path="/userList" />
    </>
  );
};

export default App;
