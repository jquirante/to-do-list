import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import List from './list';

const App = () => (
    <div className="container">
        <h1 className="center">To Do List</h1>
        <List/>
    </div>
);

export default App;
