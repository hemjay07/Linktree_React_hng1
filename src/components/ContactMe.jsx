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
  const handleClicked = () => {
    const message = document.getElementById("message");
    if (message.value == "") {
      document.querySelector("#message_error").innerHTML =
        "Please enter a message";
      document.querySelector("#message").style.border = "1px solid #f89687";
    } else {
      document.querySelector("#message_error").innerHTML = "";
      document.querySelector("#message").style.border = "1px solid #d0d5dd";
    }
  };
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
              {" "}
              <label>
                First name
                <input
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="lastname">
              {" "}
              <label>
                Last name
                <input
                  type="text"
                  id="last_name"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </label>
            </div>
          </div>

          {/* <div className="email"> */}
          <label>
            Email
            <input
              type="email"
              id="email"
              name="email"
              placeholder="yourname@email.com"
              required
              onChange={handleChange}
              value={formData.email}
            />
          </label>
          <br />
          <br />
          {/* </div> */}

          <br />

          <label>
            Message
            <textarea
              name="textarea"
              id="message"
              cols="30"
              rows="10"
              placeholder="Send me a message and i'll reply you as soon as possible..."
              onChange={handleChange}
              value={formData.textarea}
            ></textarea>
            <div id="message_error"></div>
          </label>

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

          <button
            type="submit"
            id="btn__submit"
            className="submit"
            onClick={handleClicked}
          >
            Send message
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
