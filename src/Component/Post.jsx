import './Post.css';
import Styles from './post.module.css'
function Post(){
    return(
        <div>
            {/* <ul className={Styles.post-main}>
                <li className={Styles.post-1}>Post 1</li>
                <li className={Styles.post-2}>Post 2</li>
                <li className={Styles.post-3}>Post 3</li>
                <li className={Styles.post-4}>Post 4</li> 
                 
            </ul> */}
            <div>
                <h1 className={Styles.post}>style 2 module.css run</h1>
            </div>
            <ul>
            <li>Post1</li>
                <li>Post2</li>
                <li>Post3</li>
                <li>Post4</li>
            </ul>
        </div>
    )
}
export default Post;