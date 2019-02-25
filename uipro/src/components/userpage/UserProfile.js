import React, { Component } from 'react';

import ProfileCard from './profileCard.js'
import EditProfile from './editProfile'

import './UserProfile.css'

class UserProfile extends Component {
    render() {
        return (
            <div class="container-fluid" id="userPRofileback">
                <div class="row">
                    <div class="col-8"><EditProfile /></div>
                    <div class="col-4"><ProfileCard /></div>
                </div>
            </div>
        )
    }
}

export default UserProfile;