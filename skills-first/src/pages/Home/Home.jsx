import { Link } from "react-router-dom";
import './Home.css';

function Home() {

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

      <section className="section-main">
        <div className="container">
          <div className="main-section">
            <img className="main-section-img" src="../../main-image.jpg" alt="" />
            <div className="main-section-text">
              <h2>Connect Your Skills!</h2>
              <p>Welcome to the Future of Job Matching! 🌟 At <b>Skills Connect</b>, we're 
              redefining the job search experience. Say goodbye to traditional job boards 
              and hello to personalized opportunities. 🚀 Discover exciting career paths, 
              connect with top-notch employers, and embark on a journey to success. Your 
              dream job is just a few clicks away!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-component section-component-black">
        <div className="container component-container">
          <h2 className="component-title">Find Your Dream Job!</h2>
          <p>Are you ready to supercharge your job search? Look no further! 🚀Imagine 
          a world where your resume opens doors to your dream career effortlessly. That's 
          exactly what we offer at Skills First. 🔑</p>

          {/* Carousel */}

          


        </div>
      </section>

      <section className="section-component section-component-white">
        <div className="container component-container ">
          <h2 className="compenent-title">Upload Your Resume</h2>
          <h3 className="component-subtitle">Leave The Rest to Us</h3>
          <p className="component-p">Upload your resume, and our cutting-edge technology will analyze it for you. 
          We'll match you with dream job opportunities tailored to your skills and experience. 🌐
          No more sifting through endless listings. We make job hunting effortless and exciting.
          Your dream job is just a click away! 💼✨</p>
          <Link to="/Main" className="component-btn-link"><a className="component-btn">Click Here</a></Link>
          
        </div>
      </section>

      <footer>
        <p className="footer-text">Skills Connect</p>
        <p className="footer-subtitle">Copywrite ©2023</p>


      </footer>
  
    </div>
  );
}

export default Home;