import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Dashboard/Contact";
import Home from "./pages/Home";
import Users from "./pages/Users";
import "./App.css";
import UserDetail from "./pages/UserDetail";
import Login from "./pages/Auth/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import Eror404 from "./pages/Eror404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="*" element={<Eror404/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
