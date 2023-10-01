# Functional Components

Certainly! Here's an example of a simple functional component in React:

```jsx
import React from "react";

function FunctionalComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is a functional component.</p>
    </div>
  );
}

export default FunctionalComponent;
```

In this example:

1. We import the `React` module, which is necessary for working with React components.

2. We define a functional component called `FunctionalComponent`. It takes a single `props` parameter, which is an object containing properties (data) passed to the component.

3. Inside the component's function, we return JSX code that describes the structure of the component. In this case, we have an `<h1>` element that displays a greeting based on the `props.name` value and a `<p>` element with a description.

4. Finally, we export the `FunctionalComponent` so that it can be used in other parts of your React application.

You can use this `FunctionalComponent` in your application by importing and rendering it:

```jsx
import React from "react";
import FunctionalComponent from "./FunctionalComponent"; // Assuming this component is in a separate file

function App() {
  return (
    <div>
      <FunctionalComponent name="Alice" />
      <FunctionalComponent name="Bob" />
    </div>
  );
}

export default App;
```

In the `App` component, we import and render the `FunctionalComponent` twice, passing different `name` props to each instance. This results in two greetings being displayed on the web page, one for "Alice" and one for "Bob."

Functional components are a fundamental part of React development, and you can create more complex components by composing and reusing them as needed in your application.
