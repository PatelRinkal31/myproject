import './style2.css'
function ReduxQA(){
    return(
        <>
        <h2>Module-7) React - Applying Redux </h2>
        <ul className='reduxqa'>
            <li>
                <h3>What is Redux?</h3>
                <p>Redux is an oper-source javascript library used for managing application state.</p>
                <p>It is commonly used in conjunction with React, but can be used with any other javascript framework or library as well</p>
                <p>It provide centralize data</p>
                <p>Redux store is immutable </p>
            </li>
            <li>
                <h3>What is Redux Thunk used for?</h3>
                <p>Redux middleware called thunk</p>
                <p>It allows us to return functions instead of objects from redux actions. Plain redux doesn’t allow complex logic inside action functions, you can only perform simple synchronous updates by dispatching actions. This middleware extends its ability and lets you write complex logic that interacts with the store.</p>
                <p>Thunk allows us to dispatch actions manually, which gives us the power to incorporate some logic or run some asynchronous code before dispatching an action. The function returned from action is called a thunk function which is called with two arguments : </p>
                <ol>
                    <li><h5>dispatch</h5>It is a method used to dispatch actions, that can be received by reducers.</li>
                    <li><h5>getState</h5>It gives access to store inside the thunk function</li>
                </ol>
            </li>
            <li>
                <h3>What is Pure Component? When to use Pure Component over Component? </h3>
                <p>PureComponent is similar to Component but it skips re-renders for same props and state. Class components are still supported by React, but we don’t recommend using them in new code.</p>
                <p>It is the type of component which re-renders only when the props passed to it changes and not even if its parent component re-renders or if the shouldComponentUpdate()method is called. It is greatly used to enhance the performance of a web application.</p>
            </li>
            <li>
                <h3>What is the second argument that can optionally be passed tosetState and what is its purpose? </h3>
                <p>The second argument that can optionally be passed to setState is a callback function which gets called immediately after the setState is completed and the components get re-rendered. </p>
                <p>If you want your program to update the value of a state using setState and then perform certain actions on the updated value of state then you must specify those actions in a function which should be the second argument of the setState. If we would not do so then those actions will be performed on the previous value of state because of asynchronous nature of setState.</p>
            </li>
        </ul>
        </>
    )
}
export default  ReduxQA