import "animate.css";

const Carousel = ({ a, title, desc, images }) => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators" style={{ marginBottom: 40 }}>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={a} className="d-block w-100" alt="a" />
          <div className="carousel-caption">
            <h1 className="carousel-title animate__animated animate__fadeInRightBig ">
              {title}
            </h1>
            <p className="animate__animated animate__fadeInLeftBig d-none d-md-block">
              {desc}
            </p>
          </div>
        </div>
        {images.map((item) => (
          <div className="carousel-item" key={item.id}>
            <img src={item.image} className="d-block w-100 " alt="b" />
            <div className="carousel-caption">
              <h1 className="carousel-title animate__animated animate__fadeInRightBig">
                {item.title}
              </h1>
              <p className="animate__animated animate__fadeInLeftBig d-none d-md-block">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carousel;
