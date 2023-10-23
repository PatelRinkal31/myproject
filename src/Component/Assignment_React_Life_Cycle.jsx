import { Component } from "react";
import "./Assignment1.css";
import myImage from "./images/react_life_cycle.jpg";
import Assignment_Hooks from "./Assignment_Hooks";
class Assignment_React_Life_Cycle extends Component {
  render() {
    // let img1 = require('./react_life_cycle.jpg')
    return (
      <div className="container react-life-cycle">
        <div className="react-life-cycle-contain">
          <h1>Module – 4 Lists and Hooks </h1>
          <h2>
            Explain Life cycle in Class Component and functional component with
            Hooks
          </h2>
          <div className="life-cycle-img">
            <img src={myImage} />
            <div className="life-cycle-contain">
              <ul>
                <li>
                  <b>
                    <h2>Lifecycle of Components</h2>
                  </b>
                  <p>
                    Each component in React has a lifecycle which you can
                    monitor and manipulate during its three main phases.
                  </p>
                  <p>
                    The three phases are: <b>Mounting</b>, <b>Updating</b>, and{" "}
                    <b>Unmounting</b>.
                  </p>
                </li>
                <li>
                  <b>Component Mounting Phase</b>
                  <p>
                    The mounting phase refers to the period when a component is
                    being created and inserted into the DOM. The mounting phase
                    has three main lifecycle methods that are called in order:
                  </p>
                  <ol>
                    <li>The constructor() lifecycle method</li>
                    <li>The render() lifecycle method</li>
                    <li>The getDerivedStateFromProps() lifecycle method</li>
                  </ol>
                </li>
                <li>
                  <b>The componentDidMount() lifecycle method</b>
                  <p>
                    The componentDidMount() method is called once the component
                    has been mounted into the DOM. It is typically used to set
                    up any necessary event listeners or timers, perform any
                    necessary API calls or data fetching, and perform other
                    initialization tasks that require access to the browser's
                    DOM API.
                  </p>
                </li>
                <li>
                  <b>Component Updating Phase</b>
                  <ol>
                    <li>
                      <b>The shouldComponentUpdate() lifecycle method</b>
                      <p>
                        The shouldComponentUpdate() method is called before a
                        component is updated. It takes two arguments: nextProps
                        and nextState. This method returns a boolean value that
                        determines whether the component should update or not.
                        If this method returns true, the component will update,
                        and if it returns false, the component will not update.
                      </p>
                    </li>
                    <li>
                      <b>The componentWillUpdate() lifecycle method</b>
                      <p>
                        componentWillUpdate() is a lifecycle method in React
                        that gets called just before a component's update cycle
                        starts. It receives the next prop and state as arguments
                        and allows you to perform any necessary actions before
                        the component updates.
                      </p>
                      <p>
                        But this method is not recommended for updating the
                        state, as it can cause an infinite loop of rendering. It
                        is primarily used for tasks such as making API calls,
                        updating the DOM, or preparing the component to receive
                        new data. componentWillUpdate() is often used in
                        conjunction with componentDidUpdate() to handle
                        component updates.
                      </p>
                    </li>
                    <li>
                      <b>The componentDidUpdate lifecycle method</b>
                      <p>
                        The componentDidUpdate() method is a lifecycle method in
                        React that is called after a component has been updated
                        and re-rendered.
                      </p>
                    </li>
                    <li>
                      <b>The getSnapshotBeforeUpdate lifecycle method</b>
                      <p>
                        The getSnapshotBeforeUpdate() method is called just
                        before the component's UI is updated. It allows the
                        component to capture some information about the current
                        state of the UI, such as the scroll position before it
                        changes. This method returns a value that is passed as
                        the third parameter to the componentDidUpdate() method.
                      </p>
                    </li>
                  </ol>
                  <li>
                    <b>Component Unmounting Phase</b>
                    <p>
                      The unmounting phase refers to the lifecycle stage when a
                      component is being removed from the DOM (Document Object
                      Model) and is no longer rendered or accessible.
                    </p>
                    <b>The componentWillUnmount() lifecycle method</b>
                    <p>
                      componentWillUnmount(): This method is called just before
                      the component is removed from the DOM. It allows you to
                      perform any necessary cleanup, such as canceling timers,
                      removing event listeners, or clearing any data structures
                      that were set up during the mounting phase.
                    </p>
                    <p>
                      After componentWillUnmount() is called, the component is
                      removed from the DOM and all of its state and props are
                      destroyed.
                    </p>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}
export default Assignment_React_Life_Cycle;
