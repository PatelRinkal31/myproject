import React from "react";
import "./Assignment1.css";
import Assignment_List from "./Assignment_List";
import Assignment_Incre_Decre from "./Assignment_Incre_Decre";
import Assignment_Router from "./Assignment_Router";
import Assignment_React_Life_Cycle from "./Assignment_React_Life_Cycle";
import Assignment_Hooks from "./Assignment_Hooks";
import Home from "./Home";
import Home1 from "../crudOp/Home1";
function Assignment1() {
  console.log(React.version)
  return (
    <div>
      <h1>Module - 3 ReactJS</h1>
      <div className="section-one">
        <ul>
          <li>
            <h2>What is React Js</h2>
            <p>
              ReactJs is a javaScript library created by Facebook for creating
              dynamic and interactive application and building better UI/UX
              design for web and Mobile Application.
            </p>
            <p>ReactJs is open-source and component baseed front-end library</p>
            <p>ReactJs is responsible for the UI design</p>
          </li>
          <li>
            <h2>What is NPM in React Js?</h2>
            <p>The World's Largest Software Registry (Library)</p>
            <p>Node Package Module</p>
            <p>The registry contains over 800,000 code packages</p>
            <p>npm is installed with Node.js</p>
          </li>
          <li>
            <h2>What is Role of Node Js in react Js?</h2>
            <p>
              <b>NodeJs</b> is a framework of javaScript which is mainly used
              working with backend of our Application or building the backend
              using Javascript
            </p>
            <p>
              whereas <b>ReactJs</b> is a javaScript front-end library.it is
              mainly used for building te user interface or the frontendof our
              application
            </p>
          </li>
          <li>
            <h2>What is CLI command In React Js? </h2>
            <p>
              In React.js, a CLI(Command Line Interface) command is a command
              that you run your computer's terminal or command prompt perform
              various development tasks related to building, testing, and
              deploying React applications. React provides a tool called{" "}
              <b>"Create React App" (CRA)</b> that simplifies the setup and
              development process of React applications, and it comes with a set
              of CLI commands to help you manage your project. CRA is the most
              common way to start a React project, and it abstracts away many of
              the configuration details, allowing you to focus on writing React
              code.
              <ol>
                <li>
                  <b>Creating a New React App:</b>
                  <p>npx create-react-app my-app</p>
                </li>
                <li>
                  <b>Starting the Development Server</b>
                  <p>cd my-app</p>
                  <p>npm start</p>
                </li>
                <li>
                  <b>Building the Production Version:</b>
                  <p>npm run build</p>
                </li>
                <li>
                  <b>Running Tests::</b>
                  <p>npm test</p>
                </li>
              </ol>
            </p>
          </li>
          <li>
            <h2>What is Components in React Js? </h2>
            <p>
              In React.js, a component is a fundamental building block for
              building user interfaces. Components are reusable, self-contained
              pieces of code that encapsulate a specific piece of UI and its
              associated logic. React applications are typically composed of
              multiple components that work together to create complex user
              interfaces.
            </p>
            <ol>
              <li>
                <h3>Functional Components</h3>
                <p>
                  Functional components, also known as stateless components, are
                  defined as JavaScript functions. They take in props (short for
                  properties) as arguments and return JSX (JavaScript XML) to
                  describe the UI structure. Functional components are primarily
                  used for presenting UI elements and do not manage their own
                  state. Here's an example of a functional component:
                </p>
              </li>
              <li>
                <h3>Class Components</h3>
                <p>Class components are defined as ES6 classes that extend the React.Component class. They have a more extensive feature set than functional components and can manage their own state using the this.state object. Class components also have access to lifecycle methods, which allow you to control component behavior at different stages of its life cycle. Here's an example of a class component:</p>
              </li>
            </ol>
          </li>
          <li>
            <h2>How to install React Js on Windows, linux Operating System? How to install NPM and How to check version of NPM?</h2>
            <p><b>Step 1:</b> <a href="https://nodejs.org/en">Node.js</a>
            Here install the LTS version (the one present on the left). Once downloaded open NodeJS without disturbing other settings, click on the Next button until it’s completely installed.</p>
        </li>
        <li>
            <p><b>Step 2:</b></p>
            <p>node -v</p>
        </li>
        <li>
            <p><b>Step 3:</b></p>
            <p>npm install -g create-react-app </p>
            <p>create-react-app --version</p>
        </li>
        <li>
            <p><b>Step 4</b></p>
            <p>mkdir newfolder</p>
        </li>
        <li>
            <p><b>Step 5:</b></p>
            <p>create-react-app reactfirst YOUR_APP_NAME</p>
        </li>
        <li>
            <p><b>Step 7:</b>To start your app run the below command</p>
            <p>npm start</p>
        </li>
        <li>
          <h2>How to check version of React Js? </h2>
          <p>console.log(React.version)</p>
          <p>18.2.0</p>
        </li>
        <li>
          <h2>How to change in components of React Js? </h2>
          <p>
            React Component automatically re-render whenever there is a change in their state or props.
            A simple update of the state, from anywherein the code, causes all the UserInterface(UI)
            elements to be re-render automatically.
          </p>
          <h3>Some steps</h3>
          <ol>
            <li>Open the Components</li>
            <li>Edit the component
              <ol>
                <li>Edit the Component code</li>
                <li>Update State(useStae or this.state)</li>
                <li>Add and Remove Props</li>
                <li>Add Event Handler(eg. onClick() onChange())</li>
                <li>Import and Use External Libraries or Components</li>
              </ol>
            </li>
            <li>Save the Changes</li>
            <li>Review and Test</li>
            <li>Debug and Refine</li>    
          </ol>
        </li>
        </ul>
      </div>
      <div>
        <Assignment_List/>
      </div>
      <div>
        <Assignment_Incre_Decre/>
      </div>
      <div>
        <Assignment_React_Life_Cycle/>
      </div>
      <div>
        <Assignment_Router/>
      </div>
      <div>
        <Assignment_Hooks/>
      </div>
      <div>
        <Home1/>
      </div>
    </div>
  );
}
export default Assignment1;
