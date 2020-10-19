import React, { Component } from "react";
import {HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from "./components/Navbar";
import './App.css';

import HomePage from "./components/Pages/HomePage";
import History from "./components/Pages/History";
import Honors from "./components/Pages/Honors";
import News from "./components/Pages/News";
import Staff from "./components/Pages/Staff";
import Team from "./components/Pages/Team";
import CurrentSeason from "./components/Pages/CurrentSeason";
import Player from "./components/Pages/Player";
import NotFound from "./components/Pages/NotFound";

class App extends Component{
    render(){
        return(
            <>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path='/' component={HomePage} exact />
                        <Route path='/History' component={History} exact />
                        <Route path='/Honors' component={Honors} exact />
                        <Route path='/News' component={News} exact />
                        <Route path='/Staff' component={Staff} exact />
                        <Route path='/Team' component={Team} exact/>
                        <Route path='/CurrentSeason' component={CurrentSeason} exact />
                        <Route path='/Player' component={Player} exact />
                        <Route path='/NotFound' component={NotFound} exact/>
                        <Redirect to='/NotFound' />
                    </Switch>
                    
                </Router>
            </>
        )
    }
}

export default App;