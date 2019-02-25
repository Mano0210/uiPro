import React, { Component } from 'react';

import './ContactForm.css'

class ContactForm extends Component {
    render() {
        return (
            <div id="ContactForm">
                <div class="container">
                    <div class="wrap-contact2">
                        <form class="contact2-form validate-form">
                           
                            <div class="wrap-input2 validate-input" data-validate="Name is required">
                                <input class="input2" type="text" name="name" id="nameInput" placeholder="Name" />
                                <span class="focus-input2" data-placeholder="NAME"></span>
                            </div>
                            <div class="wrap-input2 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input class="input2" type="text" name="email" id="emailInput"  placeholder="Email" />
                                <span class="focus-input2" data-placeholder="EMAIL"></span>
                            </div>
                            <div class="wrap-input2 validate-input" data-validate="Message is required">
                                <textarea class="input2" name="message" id="messageInput"  placeholder="Your Message.." ></textarea>
                                <span class="focus-input2" data-placeholder="MESSAGE"></span>
                            </div>
                            <div class="container-contact2-form-btn">
                                <div class="wrap-contact2-form-btn">
                                     <button class=" btn" id="sendButton">
                                        Send Your Message
                                     </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm;