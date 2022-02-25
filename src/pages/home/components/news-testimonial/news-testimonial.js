import "./news-testimonials.scss";
import Slider from "react-slick";
import news1 from "../../../../images/news/1.jpeg";
import news2 from "../../../../images/news/2.jpg";
import news3 from "../../../../images/news/3.jpg";
import news4 from "../../../../images/news/4.jpg";
import news5 from "../../../../images/news/5.jpg";
import news6 from "../../../../images/news/6.jpg";
import pro1 from "../../../../images/profiles/1.jpg";
import pro2 from "../../../../images/profiles/2.jpg";
import pro3 from "../../../../images/profiles/3.jpg";
import zigzag from "../../../../images/zigzag.png";

const NewsTestimonials = () => {
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 2,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="news-testimonials">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12">
            <h1>News</h1>
            <img src={zigzag} alt="" />

            <Slider {...settings1}>
              <div className="slide">
                <img src={news1} alt="" />
                <h3>New Fabric Opening</h3>
              </div>
              <div className="slide">
                <img src={news2} alt="" />
                <h3>
                  Applied DNA Sciences,
                  <br /> WestPoint Home Sign
                </h3>
              </div>
              <div className="slide">
                <img src={news3} alt="" />
                <h3>HanesBrands Awarded Ninth</h3>
              </div>
              <div className="slide">
                <img src={news4} alt="" />
                <h3>
                  Fruit Of The Loom <br />
                  Honered For Energy Efforts
                </h3>
              </div>
              <div className="slide">
                <img src={news5} alt="" />
                <h3>
                  ITMA 2019 Floor
                  <br /> Space Sells Out
                </h3>
              </div>
              <div className="slide">
                <img src={news6} alt="" />
                <h3>
                  Unifi Acquires National
                  <br /> Spinning Assets
                </h3>
              </div>
            </Slider>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12">
            <h1>Testimonials</h1>
            <img src={zigzag} alt="" />

            <Slider {...settings2}>
              <div className="slide">
                <div className="white-para">
                  <p>
                    "I would also like to say thank you to all your staff. I
                    love Textile. I'd be lost without Textile."
                  </p>
                </div>
                <div className="profile">
                  <div className="image">
                    <img src={pro1} alt="" />
                  </div>

                  <div className="name-designation">
                    <h6>John S.Gates</h6>
                    <p>Co-Founder</p>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="white-para">
                  <p>
                    "I would also like to say thank you to all your staff. I
                    love Textile. I'd be lost without Textile."
                  </p>
                </div>

                <div className="profile">
                  <div className="image">
                    <img src={pro2} alt="" />
                  </div>

                  <div className="name-designation">
                    <h6>David Garryngton</h6>
                    <p>Founder</p>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="white-para">
                  <p>
                    "I would also like to say thank you to all your staff. I
                    love Textile. I'd be lost without Textile."
                  </p>
                </div>

                <div className="profile">
                  <div className="image">
                    <img src={pro3} alt="" />
                  </div>

                  <div className="name-designation">
                    <h6>David Garryngton</h6>
                    <p>Employee</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTestimonials;
