import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <div>
    <header>
        <div className="container">

          <div className="nav-bar">
            <p className="header-title">Skills Connect</p>
            <nav className="header-nav">
              <ul>
                <li><Link to="/Main" className="link">Main</Link></li>
                <li>About</li>
                <li>Log In</li>
              </ul>
            </nav>
          </div>

        </div>
      </header>
 </div>
  );
}

export default Navbar;

