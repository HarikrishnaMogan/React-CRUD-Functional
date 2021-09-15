import {Link} from "react-router-dom";
import "./Navbar.css";
function Navbar()
{
    return (
    
        <div className=" navbar navbar-expand-md navbar-light">
        <i className="fab fa-react navbar-brand"></i>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
         </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar" >
            <ul className="navbar-nav">
             <li className="nav-item">
                 
              <Link className="nav-link" to="/">Home</Link>
             </li>
             <li className="nav-item">
             <Link className="nav-link"to="/posts">Posts</Link>
             </li>
             <li className="nav-item">
             <Link className="nav-link" to="/about">About</Link>
             </li>
            </ul>
        </div>
        </div>
    );
}
export default Navbar;