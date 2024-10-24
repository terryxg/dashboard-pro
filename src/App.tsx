import { Route, Routes, useNavigate } from "react-router";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import { setNavigate } from "./lib/navigation";
import Login from "./pages/Login";

const App = () => {
  const navigate = useNavigate();
  setNavigate(navigate);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
