import { NavLink } from "react-router-dom";

function Assignment_Navbar(){
    return(
        <div className="nav-link">
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/AboutUs'>AboutUs</NavLink></li>
                <li><NavLink to='/ContactUs'>Contact Us</NavLink></li>
            </ul>
        </div>
    )
}
export default Assignment_Navbar;