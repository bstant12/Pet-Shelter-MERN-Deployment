import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Main from "./views/Main";
import Details from'./views/Details';
import Create from './views/Create';
import Update from './views/Update';
import {Router, Redirect} from '@reach/router'

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <hr/>
      <Router>
        <Redirect from="/" to="/pets" no throw/>

        <Main path='/pets'/>
        <Create path='/pets/new'/>
        <Details path='/pets/:id'/>
        <Update path='/pets/:id/edit'/>

      </Router>
    </div>
  );
}

export default App;