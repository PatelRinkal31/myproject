import './Assignment1.css'
import { Link, Outlet } from "react-router-dom";

function AboutUs(){
    return(
        <div className="child-route">
            <h2>This is About Us page </h2>
            <Link to='AboutUs1'>AboutUs1</Link>
            <Link to='AboutUs2'>AboutUs2</Link>
            <Outlet/>
        </div>
    )
}
export default AboutUs;