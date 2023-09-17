import { Link } from "react-router-dom";
import './Home.css'

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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
                 placeat doloremque unde non nam cumque aliquid fugiat recusandae pariatur, 
                 aliquam aut modi! Corporis quas minus fugit odit iste temporibus porro? Lorem 
                 ipsum dolor sit amet consectetur adipisicing elit. Beatae, sapiente assumenda! 
                 Amet iste vitae eligendi aspernatur enim nobis excepturi tenetur hic culpa laudantium. 
                 Incidunt nulla cumque, rem voluptate magnam quia.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-component section-component-black">
        <div className="container component-container">
          <h2>Find Your Dream Job!</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, 
            qui voluptatum. Ratione distinctio nam beatae repellendus atque quibusdam 
            assumenda iusto enim hic debitis, ducimus commodi eius in excepturi 
            voluptatem perspiciatis?</p>
        </div>
      </section>

      <section className="section-component section-component-white">
        <div className="container component-container ">
          <h2>Upload Your Resume</h2>
          <h3>Leave The Rest to Us</h3>
          <p className="component-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, 
            qui voluptatum. Ratione distinctio nam beatae repellendus atque quibusdam 
            assumenda iusto enim hic debitis, ducimus commodi eius in excepturi 
            voluptatem perspiciatis?</p>
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