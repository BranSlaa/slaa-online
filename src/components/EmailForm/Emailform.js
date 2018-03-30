import React from 'react'

const Emailform = () => (
  <form action="https://jumprock.co/mail/BrandonSlaa" method="post">
    <input type="text" name="email" placeholder="Email Address" />
    <input type="text" name="message" placeholder="message" />
    <input type="submit" value="Contact Us" />
    <input type="hidden" name="after" value="https://slaa.online" />
  </form>
)

export default Emailform
