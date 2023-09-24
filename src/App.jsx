import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className=" app-container flex-1 w-full items-center flex flex-col">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Toaster />
    </div>
  );
};

export default App;
