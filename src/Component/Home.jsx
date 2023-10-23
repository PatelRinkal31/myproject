import thoght from './images/Thought2.jpg'
function Home(){
    return(
        <div>
            <h2>Welcome to our Home Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Alias quo esse, 
                veritatis culpa iusto soluta iste perspiciatis modi illum quia?</p>
                <img src={thoght} style={{width:"50%"}}/>
        </div>
    )
}
export default Home;