import "./quality.scss";
import { useEffect } from "react";
import $ from "jquery";
import bg1 from "../../../../images/backgrounds/1.jpg";
import bg2 from "../../../../images/backgrounds/2.jpg";
import bg3 from "../../../../images/backgrounds/3.jpg";
const Quality = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("#card1").mouseover(function () {
        $(".quality").css("background-image", `url(${bg1})`);
      });
    });

    $(document).ready(function () {
      $("#card2").mouseover(function () {
        $(".quality").css("background-image", `url(${bg2})`);
      });
    });

    $(document).ready(function () {
      $("#card3").mouseover(function () {
        $(".quality").css("background-image", `url(${bg3})`);
      });
    });
  });

  return (
    <div className="quality">
      <div className="container">
        <div
          className="row"
          style={{
            textAlign: "-webkit-center",
          }}
        >
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <div class="card-deck">
              <div id="card1" class="card text-white">
                <div class="card-img-overlay">
                  <h3 class="card-title">01</h3>
                  <h2 class="card-title">
                    World-class
                    <br /> Technology
                  </h2>

                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <a class="btn btn-outline-light" href="#">
                    Find out
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6"
            style={{
              borderLeft: "1px solid white",
              borderRight: "1px solid white",
            }}
          >
            <div class="card-deck">
              <div id="card2" class="card text-white">
                <div class="card-img-overlay">
                  <h3 class="card-title">02</h3>
                  <h2 class="card-title">
                    Quality <br />
                    Standard
                  </h2>

                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <a class="btn btn-outline-light" href="#">
                    Find out
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <div class="card-deck">
              <div id="card3" class="card text-white">
                <div class="card-img-overlay">
                  <h3 class="card-title">03</h3>
                  <h2 class="card-title">Productive Capacity</h2>

                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <a class="btn btn-outline-light" href="#">
                    Find out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
