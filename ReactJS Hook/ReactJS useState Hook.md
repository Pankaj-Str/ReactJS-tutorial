# ReactJS useState Hook

The `useState` hook is a fundamental hook in React that allows you to add state to functional components. It's used to declare state variables and update them in a functional component. Here's an example of how to use the `useState` hook in a React component:

```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" and initialize it to 0
  const [count, setCount] = useState(0);

  // Event handler function to increment the count
  const increment = () => {
    setCount(count + 1); // Update the "count" state variable
  };

  // Event handler function to decrement the count
  const decrement = () => {
    setCount(count - 1); // Update the "count" state variable
  };

  return (
    <div>
      <h1>Counter Example</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

In this example, we import `useState` from the 'react' library. We declare a state variable called `count` using the `useState` hook and initialize it to `0`. We also get a function `setCount` that we can use to update the `count` state variable.

We then define two event handler functions, `increment` and `decrement`, which use `setCount` to update the `count` state variable when the buttons are clicked.

Inside the `return` statement, we display the current value of `count` and provide buttons to increment and decrement it. When you click the buttons, the component re-renders, and the updated value of `count` is displayed.

This is a basic example of how to use the `useState` hook in a React functional component to manage and update state.
