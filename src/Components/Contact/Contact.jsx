import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div className="contact-form" id='contact'>
            <form >
            <h2>Contact Me</h2>
            <p>Send a message</p>
              <div>
                <label htmlFor="firstName">Full Name *</label>
                <div className='names'>
                  <input type="text" placeholder="First Name" required/>
                  <input type="text" placeholder="Last Name" required/>
                </div>
              </div>
              <div>
                <label htmlFor="email">E-mail *</label>
                <input type="email" placeholder="example@example.com" required/>
              </div>
              <div>
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
    </div>
  )
}

export default Contact