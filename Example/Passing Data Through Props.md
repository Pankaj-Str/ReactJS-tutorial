# Passing Data Through Props

Passing data through props is a fundamental concept in React, a popular JavaScript library for building user interfaces. Props (short for "properties") allow you to pass data from a parent component to a child component. Here's a simple example to illustrate how this works:

Suppose you have a parent component called `ParentComponent` and a child component called `ChildComponent`. You want to pass a piece of data, such as a string, from the parent to the child using props.

ParentComponent.js:
```jsx
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const message = "Hello from ParentComponent!";

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} />
    </div>
  );
}

export default ParentComponent;
```

ChildComponent.js:
```jsx
import React from 'react';

function ChildComponent(props) {
  // You can access the data passed from the parent using props
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.message}</p>
    </div>
  );
}

export default ChildComponent;
```

In this example:

1. `ParentComponent` defines a `message` variable and renders `ChildComponent`, passing `message` as a prop with the name `message={message}`.
2. `ChildComponent` receives the `message` prop and displays it within a paragraph element.

When you render `ParentComponent`, you'll see that the `ChildComponent` displays the message passed from its parent:

```jsx
ReactDOM.render(<ParentComponent />, document.getElementById('root'));
```

This is a basic example of passing data through props in React. Props can be used to pass any type of data, such as strings, numbers, objects, or even functions, from parent components to child components, allowing you to create dynamic and reusable UI elements.
