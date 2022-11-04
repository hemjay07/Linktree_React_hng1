import React from "react";
import Footer from "./footer";

export default function () {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="contact">
        <div>
          <h2>Contact Me</h2>
        </div>
        <p> Hi there, contact me to ask me about anything you have in mind.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            id="first_name"
            placeholder="Enter your first name"
          />
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            id="last_name"
            placeholder="Enter your last name"
          />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="yourname@email.com" />
          <br />
          <br />
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            name="textarea"
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and i'll reply you as soon as possible..."
          ></textarea>
          <br />
          <br />

          {/* <textarea
            type="text"
            id="message"
            placeholder="Send me a message and i'll reply you as soon as possible..."
          /> */}

          <input type="radio" id="radio_check" />
          <label htmlFor="radio_check">
            You agree to providing your data to Mujeeb who may contact you.
          </label>
          <button type="submit" id="btn__submit">
            Send message
          </button>
          <input type="submit" />
        </form>
      </div>
      <Footer />
    </>
  );
}
