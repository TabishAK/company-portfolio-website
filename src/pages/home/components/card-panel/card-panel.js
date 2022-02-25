import { FaWatchmanMonitoring } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { MdMonitor } from "react-icons/md";
import "./card-panel.scss";
const CardPanel = () => {
  return (
    <div className="container card-panel">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4">
          <div className="card">
            <FaWatchmanMonitoring />
            <h4>We Manufacture</h4>
            <p>
              Submit a manufacturer to be featured with a free video and we'll
              send you a free sample to find our what you need.
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4">
          <div className="card">
            <FiMonitor />
            <h4>We Design Fabric</h4>
            <p>
              Choose from many fabrics and design then Create and print only the
              fabric you need with no minimum order.
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4">
          <div className="card">
            <MdMonitor />
            <h4>We Engineer</h4>
            <p>
              We carry an enormous inventory of all the things you need to
              complete your project: notions, patterns and trims.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPanel;
