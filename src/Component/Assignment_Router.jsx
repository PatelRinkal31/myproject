import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import Assignment_Navbar from "./Assignment_Navbar";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import './Assignment1.css'
import Assigment_Router_User from "./Assigment_Router_User";
import AboutUs1 from "./AboutUs1";
import AboutUs2 from "./AboutUs2";
function Assignment_Router(){
return(
    <div className="react-router-test">
        <h1>Module (6) React Router </h1>
        <BrowserRouter>
        <Assignment_Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/AboutUs/" element={<AboutUs/>}>
                <Route path="AboutUs1" element={<AboutUs1/>}></Route>
                <Route path="AboutUs2" element={<AboutUs2/>}></Route>
            </Route>
            <Route path="/ContactUs" element={<ContactUs/>}></Route>
            <Route path="/Assigment_Router_User/:id/:name/:city/:country" element={<Assigment_Router_User/>}></Route>
        </Routes>
        </BrowserRouter>       
    </div>
)
}
export default Assignment_Router;