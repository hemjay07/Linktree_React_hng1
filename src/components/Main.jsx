import React from "react";
import Profile_image from "../assets/profilepicture.jpeg";
import SharebuttonMobile from "../assets/sharebutton.png";
import SharebuttonWeb from "../assets/Content.png";
import Githubicon from "../assets/github.png";
import Slackicon from "../assets/slack.png";
import { Link } from "react-router-dom";

const browserWidth = window.innerWidth;
function Main() {
  return (
    <div className="main">
      <div className="main--profile">
        <img
          src={browserWidth >= 820 ? SharebuttonWeb : SharebuttonMobile}
          className="sharebutton"
          alt=""
        />
        <img id="profile__img" src={Profile_image} alt="profile image" />
        <div id="twitter">mujeeb_dimeji</div>
        <div id="slack">mujeeb_dimeji</div>
      </div>

      <div className="main--links">
        <button id="btn_twitter" className="btn">
          <a href="https://twitter.com/mujeeb_dimeji">
            <h3>Twitter Link</h3>
          </a>
        </button>

        <button id="btn__zuri" className="btn">
          <a href="https://training.zuri.team/">
            <h3>Zuri Team</h3>
          </a>

          <p></p>
        </button>
        <button id="books" className="btn">
          <a href="http://books.zuri.team">
            <h3>Zuri Books</h3>
            <p>Books on designs and coding </p>
          </a>
        </button>
        <button id="book__python" className="btn">
          <a href="https://books.zuri.team/python-for-beginners?ref_id=mujeeb_dimeji">
            <h3>Python Books</h3>
            <p>Learn Python the right way</p>
          </a>
        </button>
        <button id="pitch" className="btn">
          <a href="https://background.zuri.team">
            <h3>Background Check for Coders</h3>
            <p>Click to do background check on coders</p>
          </a>
        </button>
        <button id="book__design" className="btn">
          <a href="https://books.zuri.team/design-rules">
            <h3>Design Books</h3>
            <p>Get free design book by Zuri. Yes there is no catch.</p>
          </a>
        </button>
        <button id="contact" className="btn">
          <Link to="/contact">
            <h3>Contact Me</h3>
            <p>
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </Link>
        </button>
      </div>
      <div className="main--footer"></div>
      <img className="slack" src={Slackicon} alt="slack icon" />
      <img src={Githubicon} alt="Github icon" />
    </div>
  );
}

export default Main;
