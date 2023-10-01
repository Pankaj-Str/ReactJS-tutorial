# React Component State

Example of managing component state using React's `useState` hook in a functional component:

```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

In this example, we have a functional component called `Counter`. Inside the component, we use the `useState` hook to declare a state variable `count` initialized to `0`, and a function `setCount` to update the `count` state.

We also define two functions `increment` and `decrement` that use `setCount` to modify the `count` state when the "Increment" and "Decrement" buttons are clicked.

When you click the "Increment" or "Decrement" buttons, the `count` state is updated, causing React to re-render the component with the new value, and you'll see the updated count displayed in the UI.

This is a basic example of how to manage component-level state using the `useState` hook in React. You can apply similar concepts to manage more complex state in your components.
