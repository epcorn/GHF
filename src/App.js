import {
  AboutUs,
  Contact,
  Gallery,
  Home,
  Projects,
  SingleBlog,
  SingleProject,
  Timeline,
} from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Timeline" element={<Timeline />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/Projects/:name" element={<SingleProject />} />
        <Route path="/Project/:name/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
