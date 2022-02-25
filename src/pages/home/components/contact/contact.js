import zigzag from "../../../../images/zigzag.png";
import { ImLocation2 } from "react-icons/im";
import { MdOutlinePhoneIphone } from "react-icons/md";
import map from "../../../../images/map.png";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 lefttt">
            <h1>Office Contact</h1>
            <img className="zigzag" src={zigzag} alt="" />

            <p>
              The textile, textile product, and apparel manufacturing industries
              include establishments that process fiber into fabric and fabric
              into clothing and other textile products. While most apparel
              manufacturers worldwide rely on people to cut and sew pieces of
              fabric together.
            </p>

            <div className="logo-text">
              <div className="logo">
                <ImLocation2 />
              </div>
              <div className="text">
                <h6>350 Flatbush ave New York</h6>
                <p>NY 10018 USA.</p>
              </div>
            </div>

            <div className="logo-text">
              <div className="logo">
                <MdOutlinePhoneIphone />
              </div>
              <div className="text">
                <h6>123-456-789</h6>
                <p>234-432-456</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src={map} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
