import React from 'react'

const Contact = () => {
  return (
    <div id="contact-container">
      <div id="contact-header">Please feel free to contact me!</div>
      <form method="POST" action="https://formspree.io/l.mariquit@gmail.com">
        <div>
          <label>Email</label>
          <textarea name="email" placeholder="Your email" rows="1" />
        </div>
        <br />
        <div>
          <label>Message</label>
          <textarea name="message" placeholder="Your message" />
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div id="contact-footer">Or simply email me at L.Mariquit@gmail.com</div>
    </div>
  )
}

export default Contact
