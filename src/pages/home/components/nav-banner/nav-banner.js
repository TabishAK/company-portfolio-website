import "./nav-banner.scss";
import NavHeader from "../../../../components/nav-header/nav-header";
import Navbar from "../../../../components/navbar/navbar";
import Button from "../../../../components/button/button";

const NavBanner = () => {
  return (
    <div className="nav-banner">
      <NavHeader />
      <Navbar />

      <h1>
        The Largest Exporter
        <br /> of Textile Products
      </h1>
      <h6>
        In the list of importers – 45 countries: Germany, Spain, Italy, Poland,
        <br /> Portugal, Turkey, South Korea, Japan, etc.
      </h6>

      <Button label="Contact Us" />
    </div>
  );
};

export default NavBanner;
