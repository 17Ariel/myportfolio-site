import React from "react";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="font-mont">
      <Nav />
      <Home />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
