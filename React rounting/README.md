# React.js Routing

React Router is a library used in React applications to manage navigation and routing. Below is a step-by-step guide to implementing routing in a React.js project.

⸻

## Step 1: Create a React App

If you haven't already created a React app, use the following command:

```
npx create-react-app react-routing-example
cd react-routing-example
npm start
```

⸻

## Step 2: Install React Router

To use React Router, install the package:

```
npm install react-router-dom
```

⸻

## Step 3: Setup Basic Routing

Modify the src/index.js file to include BrowserRouter:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

⸻

## Step 4: Create Components

Create three components inside the src folder.

Home.js

```jsx
import React from "react";

const Home = () => {
  return <h2>Home Page</h2>;
};

export default Home;
```

About.js

```jsx
import React from "react";

const About = () => {
  return <h2>About Page</h2>;
};

export default About;
```

Contact.js

```jsx
import React from "react";

const Contact = () => {
  return <h2>Contact Page</h2>;
};

export default Contact;
```

⸻

## Step 5: Setup Routes in App.js

Modify the App.js file to define routes.

```jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  return (
    <div>
      <h1>React Router Example</h1>
      
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
```

⸻

## Step 6: Start the React App

Run the application:

```
npm start
```

Now, when you click on the links in the navigation menu, the corresponding component will render without a page ners. Let me know if you need more features like nested routes or protected routes!