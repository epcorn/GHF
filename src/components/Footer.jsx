import { Link } from "react-router-dom";
import { pageLinks, socialMedia } from "./Utils";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-12">
            <div className="footer-content">
              <h2 className="">About Giving Hope Foundation</h2>
              <p>
                A registered trust working unbiasedly, focusing to deliver hope
                to all endeavors leading to improve sustainability and quality
                of life. To bring together technology, individuals, and teams
                who work within their circle of knowledge and excellence to
                collaborate with each other and to deliver hope in more than
                just monetary ways, through actions and means where it would
                matter and make the nation stronger, make INDIANS proud.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-5 col-5 ">
            <div className="footer-content">
              <h2>Quick Links</h2>
              <ol>
                {pageLinks
                  .filter((item) => item.name !== "Timeline")
                  .map((item) => (
                    <li key={item.id}>
                      <Link to={item.link}>
                        <i className="dot"></i>
                        {item.name}
                      </Link>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
          <div className="col-md-3 col-sm-7 col-7">
            <div className="footer-content">
              <h2>News Letters</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <div className="form-group">
                <div className="input-group  mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Email id"
                    aria-describedby="button-addon2"
                    style={{ marginBottom: 0 }}
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    Send
                  </button>
                </div>
              </div>
              <ul>
                {socialMedia.map((item) => (
                  <li key={item.id}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <img src={item.image} alt={item.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <div className="container">
          <div className="copy-right-card">
            <p>
              @ {new Date().getFullYear()} All Rights Reserved by Giving Hope
              Foundation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
