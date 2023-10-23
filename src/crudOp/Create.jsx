import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const history = useNavigate();
    // const header = {"Access-Control-Allow-Origin":"*"}
    function handleSubmit(e){
        e.preventDefault();
        console.log('Click')
        axios.post("https://6520e6fea4199548356ca13f.mockapi.io/crud-op",
        {name:name,
        email : email,
         }).then(()=>{
          history('/Read')
         });
        
    }
  return (
    <div className="container mt-5">
      <form>
        <div className="d-flex justify-content-between">
          <h2 style={{color:"brown"}}>Create</h2>
          <Link to="/Read">
            <button className="btn btn-primary">Show Data</button>
          </Link>
        </div>
      <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div classNameName="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div> 
        <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Create;
