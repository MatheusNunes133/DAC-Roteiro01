import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./views/Home";
import Users from "./views/Users";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<Users/>} path="users" />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
