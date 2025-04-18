import { Route, Routes } from "react-router-dom";

import { Link } from "react-router-dom";

import { updateUser, useGlobalState } from "./core";
import "./App.css";

import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";

const update = () => {
  updateUser("Shan UI");
};

function App() {
  const user = useGlobalState().user;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="text-4xl font-bold text-center mt-4">
          React Router Example - Welcome, {user.get()}
        </h1>

        <button onClick={update}>Update name</button>
      </header>
      <nav className="app-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
