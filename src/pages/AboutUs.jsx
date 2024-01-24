import { useEffect } from "react";
import { About, Team } from "../components";

const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <About />
      <Team />
    </>
  );
};
export default AboutUs;
