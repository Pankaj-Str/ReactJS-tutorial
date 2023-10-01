# ReactJS Hook

React Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 to allow functional components to manage state and side effects previously only possible with class components. Hooks provide a more concise and readable way to work with component state and lifecycle events.

Here are some commonly used React Hooks:

1. `useState`: This Hook allows you to add state to your functional components. It takes an initial state value as an argument and returns an array with the current state value and a function to update it.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

2. `useEffect`: This Hook allows you to perform side effects in your functional components, such as data fetching, DOM manipulation, or setting up subscriptions. It takes a function as its first argument, which is executed after the component renders, and an optional second argument to specify when the effect should run.

```jsx
import React, { useEffect, useState } from 'react';

function Example() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API and update the state
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty array means this effect runs once, similar to componentDidMount

  return (
    <div>
      {/* Display data */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

3. `useContext`: This Hook allows you to access the context data provided by a `Context.Provider` higher up in the component tree.

```jsx
import React, { useContext } from 'react';

const MyContext = React.createContext();

function MyComponent() {
  const contextData = useContext(MyContext);

  return <p>{contextData}</p>;
}
```

4. `useReducer`: This Hook is used to manage complex state logic by providing a way to update state based on previous state and an action. It is often used when state transitions are more involved than simple `useState` updates.

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

These are just a few examples of the many React Hooks available. You can also create custom hooks to reuse stateful logic across components and make your code more modular and maintainable. Hooks have become an essential part of modern React development and are widely used in React applications.
