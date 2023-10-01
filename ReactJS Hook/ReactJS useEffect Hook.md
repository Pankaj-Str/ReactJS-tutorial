# ReactJS useEffect Hook

The `useEffect` hook in React allows you to perform side effects in functional components. Side effects can include data fetching, DOM manipulation, subscriptions, and more. Here's an example of how to use the `useEffect` hook:

```jsx
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  // useEffect is used to fetch data when the component mounts
  useEffect(() => {
    // This is a simplified example of a data fetching operation using the fetch API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []); // The empty array as the second argument means this effect runs only once when the component mounts

  return (
    <div>
      <h1>useEffect Example</h1>
      {data ? (
        <div>
          <h2>Title: {data.title}</h2>
          <p>Body: {data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ExampleComponent;
```

In this example:

1. We import `useState` and `useEffect` from 'react'.
2. We declare a state variable `data` using `useState` to store the fetched data, initializing it as `null`.

3. Inside the `useEffect` hook, we perform a data fetching operation using the `fetch` API to retrieve a post from a JSON placeholder API. We then update the `data` state variable with the fetched data.

4. The second argument of `useEffect` is an empty array (`[]`). This means that the effect will only run once when the component mounts. If you omit the second argument or provide a non-empty array of dependencies, the effect will run whenever those dependencies change.

5. In the `return` statement, we conditionally render the fetched data if it exists, or a "Loading..." message if it's still being fetched.

This is a basic example of how to use the `useEffect` hook to fetch data when a component mounts. It's important to handle cleanup and dependency management when using `useEffect` for more complex scenarios.
