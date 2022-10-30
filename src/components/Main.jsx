import React from "react";
import Profile_image from "../assets/profilepicture.jpeg";
import SharebuttonMobile from "../assets/sharebutton.png";
import SharebuttonWeb from "../assets/Content.png";
import Githubicon from "../assets/github.png";
import Slackicon from "../assets/slack.png";

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
        <img id="profile_img" src={Profile_image} alt="profile image" />
        <div id="twitter">mujeeb_dimeji</div>
        <div id="slack">mujeeb_dimeji</div>
      </div>

      <div className="main--links">
        <a href="https://twitter.com/mujeeb_dimeji">
          <button id="btn_twitter">
            <h3>Twitter Link</h3>
          </button>
        </a>
        <a href="https://training.zuri.team/">
          <button id="btn_zuri">
            <h3>Zuri Team</h3>
            <p></p>
          </button>
        </a>
        <a href="http://books.zuri.team">
          <button id="books">
            <h3>Zuri Books</h3>
            <p>Books on designs and coding </p>
          </button>
        </a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=mujeeb_dimeji">
          <button id="book_python">
            <h3>Python Books</h3>
            <p>Learn Python the right way</p>
          </button>
        </a>
        <a href="https://background.zuri.team">
          <button id="pitch">
            <h3>Background Check for Coders</h3>
            <p>Click to do background check on coders</p>
          </button>
        </a>
        <a href="https://books.zuri.team/design-rules">
          <button id="book_design">
            <h3>Design Books</h3>
            <p>Get free design book by Zuri. Yes there is no catch.</p>
          </button>
        </a>
      </div>
      <div className="main--footer"></div>
      <img className="slack" src={Slackicon} alt="slack icon" />
      <img src={Githubicon} alt="Github icon" />
    </div>
  );
}

export default Main;
