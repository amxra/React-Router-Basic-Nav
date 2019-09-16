import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from "react-router-dom";

const App = () => (
  <div>
    
    <Navigation />
    <Route exact path = "/" component ={""}/>
    <Route path = "about" component ={""}/>
    <Route path = "/contact" component ={""}/>
    
  </div>
);

export default App;
