import "./styles.css";
import React, { Component } from "react";

const FirstComponent = () =>
  React.createElement(
    "h1",
    { className: "first_component_title" },
    "First Component"
  );

class SecondComponent extends React.Component {
  render() {
    return <h1>Second Component</h1>;
  }
}
class ThirdComponent extends React.PureComponent {
  render() {
    return <h1>Third Component</h1>;
  }
}

let FourthComponent = () => <h1>Fourth Component</h1>;

class App extends Component {
    render() {
        return (
    <div id="app" className="App">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
    </div>
        );
    }
}

export default App;