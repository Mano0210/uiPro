import React, { Component } from 'react';

import './Register.css'

class Register extends Component {
    render() {
        return (
            <di>
                <div class="signupForm">
                    <div class="signup-form">
                        <form action="/examples/actions/confirmation.php" method="post" id="signupForm">
                            <p class="hint-text" id="signupText">Create your account. It's free and only takes a minute.</p>
                            <div class="form-group">
                                <input type="text" class="form-control" name="first_name" placeholder="First Name" required="required" id="signupFname" />
                            </div>
                            <div class="form-group">
                                <div><input type="text" class="form-control lname" name="last_name" placeholder="Last Name" required="required" id="signupLname"/></div>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" name="email" placeholder="Email" required="required" id="signupEmail"/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" name="password" placeholder="Password" required="required" pattern=".{8,}" id="signupPassword"/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="confirm_password" name="confirm_password" placeholder="Confirm Password" required="required" pattern=".{8,}" id="signupRepassword"/>
                            </div>
                            <div class="form-group">
                                <label class="checkbox-inline" ><input type="checkbox" required="required" /> I accept the <a class="terms" href="#" id="terms">Terms of Use</a> &amp; <a class="policy" href="#" id="policy">Privacy Policy</a></label>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn1 btn" id="registerButton">Register Now</button>
                            </div>
                        </form>
                    </div>
                </div></di>
        )
    }
}

export default Register;