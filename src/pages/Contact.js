import React from "react";

function Contact() {
  return (
    <div className="contact_page">
      <h1>Contact Me</h1>

      <form>
        <div>
          <label>Name</label>
          <input type="text" placeholder="Your Name" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Your Email" required />
        </div>
        <div>
          <label>Message</label>
          <textarea placeholder="Your Message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
