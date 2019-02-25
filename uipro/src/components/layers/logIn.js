import React , { Component } from 'react';


import './logIn.css';

class logIn extends Component {
    render(){
        return(
            <div id="loginform">
                <form>
                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="Enter your Email here" /><br />
                    <input type="password" id="password" class="fadeIn third" name="login" placeholder="password" /> <br />
                    <button type="submit" class="btn btn-secondary" value="" id="loginBtn">Login</button>
                </form>
            </div>
        )
    }
}

export default logIn;