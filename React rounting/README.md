
# React Router

This project demonstrates how to implement routing in a React.js application using **React Router**.

## 🚀 Steps to Set Up React Router

### 1️⃣ Create a React App
If you haven’t already created a React app, use the following command:

```sh
npx create-react-app react-routing-example
cd react-routing-example
npm start

2️⃣ Install React Router

To use React Router, install the package:

npm install react-router-dom

3️⃣ Setup React Router in index.js

Modify the src/index.js file:

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

4️⃣ Create Components

Create three components inside the src folder.

Home.js

import React from "react";

const Home = () => {
  return <h2>Home Page</h2>;
};

export default Home;

About.js

import React from "react";

const About = () => {
  return <h2>About Page</h2>;
};

export default About;

Contact.js

import React from "react";

const Contact = () => {
  return <h2>Contact Page</h2>;
};

export default Contact;

5️⃣ Define Routes in App.js

Modify the App.js file:

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

6️⃣ Run the Application

Start the React app using:

npm start

🎯 Summary
	•	✅ Install React Router (react-router-dom).
	•	✅ Wrap App with BrowserRouter in index.js.
	•	✅ Create Components (Home.js, About.js, Contact.js).
	•	✅ Define Routes using Routes and Route in App.js.
	•	✅ Use Link for navigation.
	•	✅ Run the application (npm start).

Now, clicking the navigation links will switch between pages without refreshing. 🚀

⸻

Happy Coding! 😊🎉