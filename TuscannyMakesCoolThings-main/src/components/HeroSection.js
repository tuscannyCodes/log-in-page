import './HeroSection.css';
import './RotatingImg'
import RotatingImg from './RotatingImg';
import AboutMe from './AboutMe';
function HeroSection() {
    return (
      <header className="hero-section">
       <h1 className="hero-text">TUSCANNY</h1>
       <h1 className="hero-text">MAKES COOL</h1>
       <h1 className="hero-text">THINGS!</h1>
      <RotatingImg/>
      <AboutMe/>
    </header>
    );
      
  };
  
  export default HeroSection;