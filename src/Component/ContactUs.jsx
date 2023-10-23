import { Link } from "react-router-dom";
import Assigment_Router_User from "./Assigment_Router_User";

function ContactUs(){
    return(
        <div className="user-deatails">
            <h2>This is Contact Us page</h2>
           <ul>
            <li><Link to='/Assigment_Router_User/U001/Krushna/Vrindavan/India'>Krushna</Link></li>
            <li><Link to='/Assigment_Router_User/U002/Aditya/Banglore/India'>Aditya</Link></li>
            <li><Link to='/Assigment_Router_User/U003/Himalay/Junagadh/India'>Himalay</Link></li>
            <li><Link to='/Assigment_Router_User/U004/Yaami/Pune/India'>Yaami</Link></li>
            <li><Link to='/Assigment_Router_User/U005/Shyam/california/USA'>Shyam</Link></li>
            <li><Link to='/Assigment_Router_User/U006/Zeet/Sydany/Australia'>Zeet</Link></li>
           </ul>
           <button><Link to='/'>Home</Link></button>
        </div>
    )
}
export default ContactUs;