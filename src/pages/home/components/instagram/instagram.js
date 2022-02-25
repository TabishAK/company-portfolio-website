import insta_1 from "../../../../images/insta/1.jpg";
import insta_2 from "../../../../images/insta/2.jpg";
import insta_3 from "../../../../images/insta/3.jpg";
import insta_4 from "../../../../images/insta/4.jpg";
import insta_5 from "../../../../images/insta/5.jpg";
import insta_6 from "../../../../images/insta/6.jpg";
import insta_7 from "../../../../images/insta/7.jpg";
import "./instagram.scss";
import zigzag from "../../../../images/zigzag.png";
import Button from "../../../../components/button/button";

const Instagram = () => {
  return (
    <div className="instagram">
      <h1>We’re on Instagram</h1>
      <h2>#textile</h2>
      <img src={zigzag} alt="" />

      <div className="container">
        <div className="insta-images">
          <div>
            <img src={insta_1} alt="" />
          </div>
          <div>
            <img src={insta_2} alt="" />
          </div>
          <div>
            <img src={insta_3} alt="" />
          </div>
          <div>
            <img src={insta_4} alt="" />
          </div>
          <div>
            <img src={insta_5} alt="" />
          </div>
          <div>
            <img src={insta_6} alt="" />
          </div>
          <div>
            <img src={insta_7} alt="" />
          </div>
        </div>
        <Button style={{ marginTop: 0 }} label="Go to Instagram" />
      </div>
    </div>
  );
};

export default Instagram;
