import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

/*import SideNav from './sideNav.js';*/

import SideBar from './sideBar'

import Dashboard from './Dashboard.js'
import UserProfile from './UserProfile.js'




class UIhome extends Component{
    render(){
        return(
            <div>
               <Router>
                    <div class="container">
                    <div class="d-flex flex-row my-flex-container">
                        <div class="p-2 align-self-start"><SideBar /></div>
                        <div class="p-2 align-self-end">
                            <Switch>
                                <Route exact path="/dashboard" component={Dashboard} />
                                <Route exact path="/user" component={UserProfile} />
                            </Switch>
                        </div>
                    </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default UIhome;