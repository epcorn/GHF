import { timeline } from "../components/Utils";

const Timeline = () => {
  return (
    <section className="timeline">
      <div className="container py-4">
        <div className="session-title row pt-2">
          <h1 className="text-center">Our Timeline</h1>
          <p></p>
        </div>
        <div className="main-timeline-2">
          {timeline.map((item) =>
            item.id % 2 === 1 ? (
              <div key={item.id} className="timeline-2 left-2">
                <div className="card gradient-custom">
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-2 gradient-custom-h4">
                      {item.title}
                    </h4>
                    <p className="mb-2 gradient-custom-p">
                      <i className="gradient-custom-p" aria-hidden="true"></i>
                      {item.date}
                    </p>
                    <p className="mb-0 gradient-custom-p">{item.description}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div key={item.id} className="timeline-2 right-2">
                <div className="card gradient-custom1">
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-2 gradient-custom-h4">
                      {item.title}
                    </h4>
                    <p className="gradient-custom-p mb-2">
                      <i className="gradient-custom-p" aria-hidden="true"></i>{" "}
                      {item.date}
                    </p>
                    <p className="mb-0 gradient-custom-p">{item.description}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
export default Timeline;
