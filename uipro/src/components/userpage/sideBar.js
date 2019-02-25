import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand } from 'react-bootstrap'
import { BrowserRouter as Router, NavLink, Switch } from 'react-router-dom';


import Dashboard from '../userpage/Dashboard'

import './sideBar.css'

class SideBar extends Component {
    render() {
        return (
            <div class="container-fluid" id="sideBack">
                <div class="sidenav">
                    <div ><h2 id="sidebarTitle">Easy Office Automation</h2></div>
                    <div id="userpageNav">
                        <NavLink to="dashboard" id="userpageNavitems"><span class="fa fa-chart-line fa-lg"></span>Dash Board</NavLink>
                        <NavLink to="user" id="userpageNavitems"><span id="sidenavIcons" class="far fa-user-circle fa-lg"></span>Profile</NavLink>
                        <a href="#" id="userpageNavitems">Option 3</a>
                        <a href="#" id="userpageNavitems">Option 4</a>
                        <a href="#" id="userpageNavitems">Option 5</a>
                        <a href="#" id="userpageNavitems">Option 6</a>
                        <a href="#" id="userpageNavitems">Option 7</a>
                        <a href="#" id="userpageNavitems">Option 8</a>
                    </div>
                    <div id="horLine"></div>
                    <button class="btn" id="sideBarLogOut">Log out</button>
                </div>
               
            </div>
        )
    }
}

export default SideBar;