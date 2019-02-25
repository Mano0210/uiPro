import React, { Component } from 'react'

import propic from './userPageImages/20180325_114618837_iOS.jpg'

import './profileCard.css';

class profileCard extends Component {
    render() {
        return (
            <div class="container">
            <div class="card" id="card">
                <div class="card">
                    <img src={propic} alt="Avatar" id="usercoverpic" />
                    <div class="container" id="userDetail">
                        <h4><b>Name here</b></h4>
                        <h6>email here <br />
                            number here <br />
                            role or position
                        </h6>
                    </div>
                </div>
</div>
            </div>
        )
    }
}

export default profileCard;