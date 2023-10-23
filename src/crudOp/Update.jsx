import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Update = () =>{
    const [id,setId] = useState(0)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("");

    const navigate = useNavigate;

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[]);
    const handleUpdate = (e) =>{
        e.preventDefault();
        console.log("idss",id)
        axios.put(`https://6520e6fea4199548356ca13f.mockapi.io/crud-op/${id}`,
        {
            name :name,
            email : email
        }).then(()=>{
                navigate("/Read");
         })
    }
    return(
        <div>
            <form>
        <h2 style={{color:"brown"}}>Update</h2>
      <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e)=>setName(e.target.value)}
            value={name}
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
            value={email}
          />
        </div> 
        <button type="submit" className="btn btn-primary mt-3" onClick={handleUpdate} >
          Update
        </button>
        <Link  to='/Read'>
        <button className="btn btn-secondary ms-2 mt-3">Back</button>
        </Link>
      </form>
        </div>
    )
}
export default Update;