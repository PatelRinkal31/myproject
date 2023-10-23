import { Link, useParams } from "react-router-dom";

function Assigment_Router_User(){
    const params = useParams();
    const {id,name,city,country} = params;
    return(
        <div>
            <div className="container " 
        style={{background:"lightgray",margin:"0 auto",width:"500px",border:"2px solid darkcyan"}}>
            <h2>User Data</h2>
            <table style={{width:"100%",padding:"10px 0",marginBottom:"20px"}}>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                </thead>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{city}</td>
                    <td>{country}</td>
                </tr>
            </table>
        </div>
        <button style={{marginTop:"20px",background:"darkcyan"}}><Link style={{color:"white"}} to='/ContactUs'>Conatct Us</Link></button>
        </div>
        
    )
}
export default Assigment_Router_User;