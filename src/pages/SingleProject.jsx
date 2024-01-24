import { Link, useParams } from "react-router-dom";
import { services } from "../components/Utils";
import { useEffect, useState } from "react";

const SingleProject = () => {
  const { name } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    setProject(services?.filter((item) => item.title === name));
  }, [name]);

  return (
    <section className="our-blog">
      <div className="container">
        {project?.map((item) => (
          <div key={item.id}>
            <div className="row">
              <h2 className="text-center text-primary">{item.title}</h2>
              <p className="mb-3">{item.description}</p>
            </div>
            <div className="event-ro row">
              {item.projects?.map((proj) => (
                <div className="col-md-4 col-sm-6" key={proj.id}>
                  <div className="single-blog">
                    <figure>
                      <img src={proj.image} alt={proj.name} />
                    </figure>
                    <div className="blog-detail">
                      <h4 className="text-center">{proj.name}</h4>
                      <p>{proj.description.substring(0, 200)}...</p>
                      <div className="link">
                        <Link to={`/Project/${item.title}/${proj.id}`}>
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SingleProject;
