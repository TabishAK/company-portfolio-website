import NewsTestimonials from "./components/news-testimonial/news-testimonial";
import ProductCategory from "./components/product-category/product-category";
import Capabilities from "./components/capabilities/capabilities";
import NavBanner from "../home/components/nav-banner/nav-banner";
import Subscribe from "../../components/subscribe/subscribe";
import CardPanel from "./components/card-panel/card-panel";
import Instagram from "./components/instagram/instagram";
import CountUpp from "./components/count-up/count-up";
import Quality from "./components/quality/quality";
import Contact from "./components/contact/contact";
import Brands from "./components/brands/brands";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <NavBanner />
      <CardPanel />
      <Capabilities />
      <ProductCategory />
      <CountUpp />
      <Quality />
      <Brands />
      <NewsTestimonials />
      <Instagram />
      <Contact />
      <Subscribe />

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
              <ul>
                <label> Company </label>
                <li>Home</li>
                <li>Our factories</li>
                <li>Mission and strategy</li>
                <li> Charitable actions</li>
                <li> Environment </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
              <ul>
                <label> Production</label>
                <li>Technology</li>
                <li>Products</li>
                <li>Quality</li>
                <li>Sales geography</li>
                <li>Our customers</li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
              <ul>
                <label>Contact us</label>
                <li>Addresses of factories</li>
                <li>Dealers</li>
                <li>Trading houses</li>
                <li>Brand shops</li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
              <h6>Shop with us</h6>
              <p>
                Manufacturer – Factory, Industral, <br />
                Manufacturing WordPress Theme
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
