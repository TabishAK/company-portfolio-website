import "./brands.scss";
import brand1 from "../../../../images/brands/1.png";
import brand2 from "../../../../images/brands/2.png";
import brand3 from "../../../../images/brands/3.png";
import brand4 from "../../../../images/brands/4.png";
import brand5 from "../../../../images/brands/5.png";
const Brands = () => {
  return (
    <div className="brands">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={brand1} />
          </div>
          <div className="col">
            <img src={brand2} />
          </div>
          <div className="col">
            <img src={brand3} />
          </div>
          <div className="col">
            <img src={brand4} />
          </div>
          <div className="col">
            <img src={brand5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
