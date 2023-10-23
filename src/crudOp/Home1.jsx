import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./Read";
import PageNotFound from "./PageNotFound";
import Create from "./Create";
import Update from "./Update";
import ReduxQA from "./ReduxQA";
function Home1(){
    return(
        <div style={{width:'100%',background:"#658787",padding:"10px 0 50px 0",marginTop:"50px",border:"2px solid darkcyan"}}>
            <div className="container mt-5 w-100">
            <ReduxQA/>
            <hr/>
                <h1 style={{color:"brown"}}>CRUD Operation</h1>  
                <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Create/>}></Route>
                    <Route exact path="/Read" element={<Read/>}></Route>
                    <Route exact path="/Update" element={<Update/>}></Route>
                    <Route exact path="*" element={<PageNotFound/>}></Route>
                </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}
export default Home1;