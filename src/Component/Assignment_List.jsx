import "./Assignment1.css";
function Assignment_List(){
    const listData = ['I am succeeding in life.',
    'I believe in myself.',
    'I am my best source of motivation.',
    'I am a powerful creator. I create the life I want and enjoy it',
    'I love myself unconditionally.']
    return(
        <div className="list-data">
            <h1>How to Create a List View in React Js?</h1>
            <ol>
                {
                    listData.map((item,i)=>
                    <li key={i}>{item}</li>
                    )
                }
            </ol>
        </div>
    )
}
export default Assignment_List