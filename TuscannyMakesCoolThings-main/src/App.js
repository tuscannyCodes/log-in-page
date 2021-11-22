import Navbar, { ROUTES } from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path={ROUTES.HOME}
            exact={true}
            element={
              <>
                <HeroSection />
                <Section />
              </>
            }
          />
          <Route
            path={ROUTES.ABOUT}
            element={
              <>
                <div>
                  <AboutMe />
                </div>
              </>
            }
          />
          <Route
            path={ROUTES.WORKS}
            element={
              <>
                <div>Hello world! works</div>
              </>
            }
          />
          <Route
            path={ROUTES.CONTACT}
            element={
              <>
                <div>Hello world! contact</div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
