import a from "../images/slider/slider-1.jpeg";
import { homeImages } from "../components/Utils";
import { Carousel, About, Team } from "../components";
import { Projects } from ".";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Carousel a={a} title="Khira Nagar" desc="" images={homeImages} />
      <About />
      <Projects home={true} />
      <div className="doctor-message">
        <div className="inner-lay">
          <div className="container">
            <div className="row session-title">
              <h2>Our Achievements in Numbers</h2>
              <p>
                We can talk for a long time about advantages of our Dental
                clinic before other medical treatment facilities. But you can
                read the following facts in order to make sure of all pluses of
                our clinic:
              </p>
            </div>
            <div className="row">
              <div className="col-sm-3 numb">
                <h3>12+</h3>
                <span>YEARS OF EXPEREANCE</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>1812+</h3>
                <span>HAPPY CHILDRENS</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>52+</h3>
                <span>EVENTS</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>48+</h3>
                <span>FUND RAISED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team home={true} />
    </div>
  );
};
export default Home;
