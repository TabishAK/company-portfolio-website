import thumbnail from "../../../../images/video_thumbnail.jpg";
import { ImPlay3 } from "react-icons/im";
import "./capabilitiles.scss";
import zigzag from "../../../../images/zigzag.png";
import sign from "../../../../images/sign.png";
import Button from "../../../../components/button/button";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Capabilities = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="capabilities">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="_XAskqsv6bo"
        onClose={() => setOpen(false)}
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="video-thumbnail">
              <img src={thumbnail} alt="" />
              <div className="play-btn" onClick={() => setOpen(true)}>
                <ImPlay3 />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 text">
            <h2>Our Capabilities</h2>
            <img className="zigzag" src={zigzag} alt="" />
            <p className="line-1">
              Stop by today; our talented staff will be happy to help you find
              what
              <br /> you’re searching for!
            </p>
            <p className="line-2">CEO: Steven Rogers</p>{" "}
            <img className="sign" src={sign} alt="" />
            <Button label="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
