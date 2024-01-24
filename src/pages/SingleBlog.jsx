import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../components/Utils";

const SingleBlog = () => {
  const { name, id } = useParams();
  const [main, setMain] = useState({});
  const [change, setChange] = useState(false);
  const blog = services
    .filter((proj) => proj.title === name)[0]
    .projects.filter((item) => item.id === Number(id));

  useEffect(() => {
    changeImage();

    // eslint-disable-next-line
  }, [change]);

  const changeImage = (id) => {
    if (id) {
      setMain(
        blog.map((blog) => blog.images.filter((image) => image.id === id))[0][0]
      );
    } else {
      setMain(
        blog.map((blog) => blog.images.filter((image) => image.id === 1))[0][0]
      );
      setChange(true);
    }
  };

  return (
    <div className="container">
      {blog?.map((blog) => (
        <div key={blog.id}>
          <h1 className="text-center py-3">{blog.name}</h1>
          <img src={blog.bannerImg} alt="" />
          <div className="row mission p-4 flex-column-reverse flex-md-row">
            <div className="col-md-6 mv-img">
              <div className="row mb-3">
                <div className="col-3">
                  <div className="row gy-1">
                    {blog.images.map((image, index) => {
                      return (
                        <img
                          key={index}
                          className="proj-img border border-dark"
                          src={image.img}
                          alt="name"
                          onClick={() => changeImage(image.id)}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="col-9">
                  <img
                    src={main.img}
                    alt="main"
                    style={{ height: 540 }}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 mv-det">
              <p>{blog.description}</p>
              <br />
              <p>
                <b>{blog.boldDesc}</b>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SingleBlog;
