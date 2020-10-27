import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import { Login, Register, Home } from './components/login';
import Users2 from './components/board/Users2'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/users2" component={Users2} />
            </BrowserRouter>
        </div>
    );
}

export default App;