import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import Users from "./User";
import UserCreate from "./UserCreate";
import UserUpdate from "./UserUpdate";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="create" element={<UserCreate />}></Route>
          <Route path="update/:id" element={<UserUpdate />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
