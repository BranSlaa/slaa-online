import React from 'react';

const EmailForm = () => (
    <form
        className="contactForm"
        name="contact"
        method="POST"
        data-netlify="true"
    >
        <div className="inputFields">
            <label>
                Your Name: <input type="text" name="name" />
            </label>
            <label>
                Your Email: <input type="email" name="email" />
            </label>
        </div>
        <label>
            Message: <textarea name="message" />
        </label>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit">Send</button>
    </form>
);

export default EmailForm;
