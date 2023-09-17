import { Link } from "react-router-dom";
import './About.css'

function About() {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="container">

          <div className="nav-bar">
            <Link to="/" className="link"><p className="header-title">Skills Connect</p></Link>
            <nav className="header-nav">
              <ul>
                <li><Link to="/Main" className="link">Main</Link></li>
                <li><Link to="/About" className="link">About</Link></li>
                <li><Link to="/About" className="link">Log In</Link></li>
              </ul>
            </nav>
          </div>

        </div>
      </header>

      <main className="main-section-about">
        <div className="container">
          <h1 className="about-us-title">About Us.</h1>

          <div className="team-components">
            <div className="teammate">
              <img className="team-img" src="../../alejandro-pic.jpeg" alt="" />
              <div className="team-text">
                <h3 className="team-title">Alejandro Cartagena</h3>
                <p className="team-subtitle">Front end developer.</p>
              </div>

            </div>
          </div>

        </div>

  
      </main>




    </div>
  );
}

export default About;