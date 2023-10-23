import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Read() {
  const [data, setData] = useState([]);
  function displayData() {
    
    axios
      .get("https://6520e6fea4199548356ca13f.mockapi.io/crud-op")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id){
    axios.delete(`https://6520e6fea4199548356ca13f.mockapi.io/crud-op/${id}`).then(()=>{
        displayData();
    })
  }
  const setToLocalStorage = (id,name,email) =>{
     localStorage.setItem('id',id);
     localStorage.setItem('name',name);
     localStorage.setItem('email',email)
  }
  useEffect(() => {
    displayData();
  }, []);
  return (
    <div>
      
      <div className="d-flex justify-content-between">
      <h2 style={{color:"brown"}}>Read Operation</h2>
      <Link to='/'>
        <button className="btn btn-primary">Create Data</button>
      </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {data.map((eachdata) => {
          return (
            <>
              <tbody>
                <tr>
                  <th>{eachdata.id}</th>
                  <td>{eachdata.name}</td>
                  <td>{eachdata.email}</td>
                  <td>
                    <Link to='/Update'>
                    <button className="btn btn-success" onClick={()=>setToLocalStorage(eachdata.id,eachdata.name,eachdata.email)}>Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button className="btn btn-danger" 
                    onClick={()=>handleDelete(eachdata.id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
}
export default Read;
