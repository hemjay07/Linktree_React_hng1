import React from "react";
import Footer from "./footer";
import "../contactme.css";

export default function () {
  // This function clears all fields after the submit button is hit
  function handleSubmit(event) {
    event.preventDefault();
    setisChecked(false);
    setformData({ firstName: "", lastName: "", textarea: "", email: "" });
  }

  // This function updates the form data upon any change to any of the input fields
  function handleChange(event) {
    setformData({ ...formData, [event.target.name]: event.target.value });
  }

  // set the state of the attribute isChecked of the checkbox to false and call the funciton checker whenever their is a change to update the state.
  const [isChecked, setisChecked] = React.useState(false);
  function checker() {
    setisChecked(!isChecked);
    console.log(isChecked);
  }

  // Set the initial state of the formdata to empty
  const [formData, setformData] = React.useState({
    firstName: "",
    lastName: "",
    textarea: "",
    email: "",
  });

  const name = "mujeeb_dimeji";

  return (
    <>
      <div className="contact">
        <div className="headline">
          <h2>Contact Me</h2>
          <p>
            {" "}
            Hi there, contact me to ask me about anything you have in mind.
          </p>{" "}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="name">
            <div className="firstname">
              <label htmlFor="first_name">First name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="lastname">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                id="last_name"
                name="lastName"
                placeholder="Enter your last name"
                required
                onChange={handleChange}
                value={formData.lastName}
              />
            </div>
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="yourname@email.com"
              required
              onChange={handleChange}
              value={formData.email}
            />
            <br />
            <br />
          </div>

          <br />

          <div className="textarea">
            <label htmlFor="message">Message</label>

            <textarea
              name="textarea"
              id="message"
              required
              cols="30"
              rows="10"
              placeholder="Send me a message and i'll reply you as soon as possible..."
              onChange={handleChange}
              value={formData.textarea}
            ></textarea>
          </div>

          <br />
          <br />

          <div className="consent">
            <input
              required
              type="checkbox"
              id="box"
              onChange={checker}
              checked={isChecked}
            ></input>
            <label htmlFor="box">
              <p>
                You agree to providing your data to {name} who may contact you.
              </p>
            </label>
          </div>

          <button type="submit" id="btn__submit" className="submit">
            <p>Send message</p>
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
