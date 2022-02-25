import "./count-up.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FaFirefoxBrowser, FaChartBar } from "react-icons/fa";
import { GiRocketThruster, GiRolledCloth } from "react-icons/gi";
const CountUpp = () => {
  return (
    <div className="count-up">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="svg-count">
              <FaFirefoxBrowser />
              <CountUp end={37500} start={0} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <p>Tons of yarn</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="svg-count">
              <div className="svg-count">
                <FaChartBar />

                <CountUp end={17000} start={0} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
            <p>Tons of fabric</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="svg-count">
              <div className="svg-count">
                <GiRocketThruster />

                <CountUp end={9000} start={0} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
            <p>Tons of dyed fabric</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="svg-count">
              <div className="svg-count">
                <GiRolledCloth />

                <CountUp end={1400} start={0} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
            <p>Tons ready-made clothes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountUpp;
