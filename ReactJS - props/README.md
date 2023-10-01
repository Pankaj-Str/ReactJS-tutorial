# ReactJS - Properties (props)

In React, "props" is short for "properties," and it's a fundamental concept for passing data from a parent component to a child component. Props are read-only and provide a way to make your components dynamic and reusable. Here's how you can use props in React:

### Passing Props:

You can pass data to a React component by providing attributes to the component when you use it in JSX. These attributes become the props of the component.

**ParentComponent.js:**
```jsx
import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const name = "Alice";
  return (
    <div>
      <ChildComponent name={name} />
    </div>
  );
}

export default ParentComponent;
```

In this example, we pass the `name` prop to the `ChildComponent`.

### Receiving Props:

In the child component, you can access the props passed to it as an object. These props are available as the first argument of the functional component or via `this.props` in a class-based component.

**ChildComponent.js (Functional Component):**
```jsx
import React from "react";

function ChildComponent(props) {
  return <p>Hello, {props.name}!</p>;
}

export default ChildComponent;
```

**ChildComponent.js (Class-Based Component):**
```jsx
import React, { Component } from "react";

class ChildComponent extends Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}

export default ChildComponent;
```

In both cases, the `ChildComponent` receives the `name` prop and displays it.

### Default Props:

You can also define default values for props using the `defaultProps` property in a functional component or by defining a `defaultProps` static property in a class-based component.

**Functional Component with Default Props:**
```jsx
import React from "react";

function ChildComponent(props) {
  return <p>Hello, {props.name}!</p>;
}

ChildComponent.defaultProps = {
  name: "Guest",
};

export default ChildComponent;
```

**Class-Based Component with Default Props:**
```jsx
import React, { Component } from "react";

class ChildComponent extends Component {
  static defaultProps = {
    name: "Guest",
  };

  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}

export default ChildComponent;
```

In both cases, if the `name` prop is not provided when using the component, it will default to "Guest."

### Using Props in Components:

Props can be used within components just like regular JavaScript variables. You can interpolate them in JSX and use them to conditionally render content, pass data to child components, and more.

```jsx
function ChildComponent(props) {
  return (
    <div>
      <p>Hello, {props.name}!</p>
      {props.isVIP && <p>Welcome, VIP!</p>}
    </div>
  );
}
```

In this example, we use the `name` and `isVIP` props to conditionally render content in the `ChildComponent`.

Props are a fundamental part of React's component architecture and play a crucial role in creating dynamic and reusable components in your applications.
