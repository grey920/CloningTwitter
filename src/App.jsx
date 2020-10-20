import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import { Login, Register, Home, Users } from './components/login';

function App(){
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/users" component={Users}/>
           </BrowserRouter>
        </div>
    );
}

export default App;