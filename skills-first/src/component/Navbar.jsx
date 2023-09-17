import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <div>
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
 </div>
  );
}

export default Navbar;

