import React from 'react'

const EmailForm = () => (
  <form
    className="contactForm"
    name="contact"
    method="POST"
    data-netlify="true"
  >
    <label>
      Your Name: <input type="text" name="name" />
    </label>
    <label>
      Your Email: <input type="email" name="email" />
    </label>
    <label>
      Message: <textarea name="message" />
    </label>
    <button type="submit">Send</button>
  </form>
)

export default EmailForm
