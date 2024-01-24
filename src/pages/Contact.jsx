import { useEffect } from "react";
import build from "../images/social/building.gif";
import phone from "../images/social/fax.gif";
import web from "../images/social/globe.gif";
import email from "../images/social/message.gif";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="row no-margin">
      <div className="container pt-3">
        <h1 className="text-center my-3">Contact Us</h1>
        <div className="row flex-column-reverse flex-md-row">
          <div style={{ padding: 20 }} className="col-md-6">
            <div className="row cont-row">
              <div className="col-sm-3">
                <label>Full Name</label>
              </div>
              <div className="col-sm-8">
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  className="form-control input-sm"
                />
              </div>
            </div>
            <div className="row cont-row">
              <div className="col-sm-3">
                <label>Email Address</label>
              </div>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Email Address"
                  className="form-control input-sm"
                />
              </div>
            </div>
            <div className="row cont-row">
              <div className="col-sm-3">
                <label>Mobile Number</label>
              </div>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Mobile Number"
                  className="form-control input-sm"
                />
              </div>
            </div>
            <div className="row cont-row">
              <div className="col-sm-3">
                <label>Enter Message</label>
              </div>
              <div className="col-sm-8">
                <textarea
                  rows="5"
                  placeholder="Enter Your Message"
                  className="form-control input-sm"
                ></textarea>
              </div>
            </div>
            <div style={{ marginTop: 10 }} className="row">
              <div className="col-sm-12 text-center">
                <button className="btn btn-primary">Send Message</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ margin: 15 }} className="serv">
              <img src={build} style={{ height: 50 }} className="m-2" alt="" />
              <b>Address : </b> Khira Industries <br />
              <img src={email} style={{ height: 50 }} className="m-2" alt="" />
              <b>Email : </b>ghf.org.in@gmail.com <br />
              <img src={phone} style={{ height: 50 }} className="m-2" alt="" />
              <b>Phone : </b>+91 7400 453 069 <br />
              <img src={web} style={{ height: 50 }} className="m-2" alt="" />
              <b>Website : </b>www.ghf.com <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
