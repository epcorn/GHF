import { team } from "./Utils";
import insta from "../images/social/instagram.png";
import fb from "../images/social/facebook.png";
import ln from "../images/social/linkedin.png";

const Team = ({ home }) => {
  let teams;
  if (home) {
    teams = team.slice(0, 4);
  } else {
    teams = team;
  }
  return (
    <section className="bg-04">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading">
              <h2 className="text-center">Meet Our Team</h2>
            </div>
          </div>
          <div className="main-team-card d-flex">
            {teams.map((item) => (
              <div className="team-setup" key={item.id}>
                <div className="team-items">
                  <div className="team-user">
                    <img src={item.image} alt="name" />
                  </div>
                  <div className="team-user-social">
                    <ol>
                      <li>
                        <a href="https://www.linkedin.com/">
                          <img src={ln} alt="Linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/">
                          <img src={fb} alt="Facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <img src={insta} alt="Instagram" />
                        </a>
                      </li>
                    </ol>
                  </div>
                  <div className="team-name">
                    <h2>{item.name}</h2>
                    <b>{item.title}</b>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
