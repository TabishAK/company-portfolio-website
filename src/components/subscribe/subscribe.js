import "./subscribe.scss";
import SocialIcons from "./../social-icons/social-icons";
import Button from "../button/button";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="subscribe-stuff">
          <p className="mar">Sign up for the latest news and deals</p>
          <input className="mar" placeholder="Your email address" />
          <Button className="mar" style={{ marginTop: 0 }} label="Subscribe" />
        </div>

        <SocialIcons />
      </div>
    </div>
  );
};

export default Subscribe;
