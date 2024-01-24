import { useEffect } from "react";
import { services } from "../components/Utils";
import { Link } from "react-router-dom";

const Projects = ({ home }) => {
  let allServices;
  if (home) {
    allServices = services.slice(0, 3);
  } else {
    allServices = services;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="events">
      <div className="container">
        <div className="session-title row">
          <h1 className="text-center">Our Projects</h1>
          <p>
            Each of our below listed projects are undertaken as a gap was
            noticed and a need was seen where a category contribution could be
            done by our intervention from GHF.
          </p>
        </div>
        <div className="event-ro row">
          {allServices.map((item) => (
            <div className="col-md-4 col-sm-6" key={item.id}>
              <div className="event-box">
                <img src={item.image} alt="" style={{ width: 450 }} />
                <h4>{item.title}</h4>
                <p className="raises">
                  <span>Raised : ₹{item.raised}</span> / ₹{item.total}
                </p>
                <p className="desic">
                  {item.description?.substring(0,110)}...
                </p>
                <Link
                  to={`/Projects/${item.title}`}
                  className="btn btn-dark btn-sm me-2"
                >
                  Know More
                </Link>
                <button className="btn btn-success btn-sm">Donate Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
