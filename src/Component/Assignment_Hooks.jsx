function Assignment_Hooks() {
  return (
    <div>
      <div className="hooks-containe">
        <h2>React Hooks</h2>
        <p>
          Hooks were added to React in version <b>16.8</b>.
        </p>
        <p>
          Hooks allow function components to have access to state and other
          React features. Because of this, class components are generally no
          longer needed.
        </p>
        <ul>
          <li>
            <h2>What is a Hooks</h2>
            <p>
              Hooks allow us to "hook" into React features such as state and
              lifecycle methods
            </p>
          </li>
          <li>
            <h2>Hook Rules</h2>
            <p>Hooks can only be called inside React function components.</p>
            <p>Hooks can only be called at the top level of a component.</p>
            <p>Hooks cannot be conditional</p>
            <p>
              <b>Note:</b>Hooks will not work in React class components.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <h2>React useState Hook</h2>
            <p>
              The React useState Hook allows us to track state in a function
              component. State generally refers to data or properties that need
              to be tracking in an application.
            </p>
            <p>import first</p>
            <p>
              Initialize useState We initialize our state by calling useState in
              our function component. useState accepts an initial state and
              returns two values: The current state. A function that updates the
              state.
            </p>
          </li>
          <li>
            <h2>React useEffect Hooks</h2>
            <p>The useEffect Hook allows you to perform side effects in your components.
              Some examples of side effects are: fetching data, directly updating the DOM, and timers.
              useEffect accepts two arguments. The second argument is optional.
              useEffect(function, dependency).
              This hook lets you perform side effects in your components, such as data fetching, DOM manipulation, or subscriptions. It takes a function as its first argument and runs that function after the component renders.
            </p>
          </li>
          <li>
            <h2>useContext</h2>
            <p>This hook allows you to access the context API in functional components, providing a way to share data or state between components without prop drilling</p>
          </li>
          <li>
            <h2>useReducer</h2>
            <p> This hook is a more advanced alternative to useState for managing complex state logic. It uses a reducer function to handle state changes</p>
          </li>
          <li>
            <h2>useRef</h2>
            <p>This hook creates a mutable ref object that can be used to access DOM elements or store values that persist between renders.</p>
          </li>
          <li>
            <h2>Custom Hooks</h2>
            <p>Developers can create their own custom hooks to encapsulate and share logic across multiple components. Custom hooks follow the naming convention of starting with "use."</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Assignment_Hooks;
