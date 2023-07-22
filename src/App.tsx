import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import { About } from "./components/About.tsx";
import { Tech } from "./components/Tech.tsx";
import { Projects } from "./components/Projects/Projects.tsx";
import { Experience } from "./components/Experience/Experience.tsx";
import { Contact } from "./components/Contact.tsx";
import { projects } from "./constants";

function App() {
  const theme = {
    main: "mediumseagreen",
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="relative z-0">
          <div>
            <Navbar />
            <Hero />
          </div>

          <div className="bg-about bg-cover bg-center bg-no-repeat">
            <About />
          </div>

          <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
            <Tech />
          </div>

          {projects && projects.length > 0 && <Projects />}

          <div
            className="bg-experience bg-cover bg-center bg-no-repeat
            rounded-tl-[150px] rounded-br-[150px]"
          >
            <div
              className="bg-experienceLight bg-cover bg-center
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
            >
              <Experience />
            </div>
          </div>
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
