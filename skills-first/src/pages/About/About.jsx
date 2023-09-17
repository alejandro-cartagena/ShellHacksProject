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
          <h1 className="about-us-title">Meet Our Team!</h1>

          <div className="team-components">

            <div className="container">
              <div className="teammate">
                <img className="team-img" src="../../alejandro-pic.jpeg" alt="" />
                <div className="team-text">
                  <h3 className="team-title">Alejandro Cartagena</h3>
                  <p className="team-subtitle">Front end developer</p>
                  <p className="team-skills">React, Git, Figma, UI Design</p>
                </div>

              </div>
            </div>

            <div className="container">
              <div className="teammate">
                <img className="team-img" src="../../nicole-pic.jpeg" alt="" />
                <div className="team-text">
                  <h3 className="team-title">Nicole Gentil</h3>
                  <p className="team-subtitle">Front end developer</p>
                  <p className="team-skills">React, Git, Figma, UI Design</p>
                </div>

              </div>
            </div>

            <div className="container">
              <div className="teammate">
                <img className="team-img" src="../../bryan-pic.jpeg" alt="" />
                <div className="team-text">
                  <h3 className="team-title">Bryan Virgil</h3>
                  <p className="team-subtitle">Backend developer</p>
                  <p className="team-skills">Python, Django, REST API Framework</p>
                </div>

              </div>
            </div>

            <div className="container">
              <div className="teammate">
                <img className="team-img" src="../../jackie-pic.jpeg" alt="" />
                <div className="team-text">
                  <h3 className="team-title">Jacquelyn Shelby</h3>
                  <p className="team-subtitle">Backend developer</p>
                  <p className="team-skills">Python, Django, REST API Framework</p>
                </div>

              </div>
            </div>

          </div>

        </div>
  
      </main>

      <footer>
            <p className="footer-text">Skills Connect</p>
            <p className="footer-subtitle">Copywrite ©2023</p>
      </footer>


    </div>
  );
}

export default About;