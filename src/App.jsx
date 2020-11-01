import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import { Login, Register, Home } from './components/login';
import Users from './components/board/Users'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                {/* <Route path="/register/:id" component={Register} /> */}
                <Route path="/users" component={Users} />
            </BrowserRouter>
        </div>
    );
}

export default App;