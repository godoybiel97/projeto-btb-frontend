import { Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Main from "./views/Main";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default MainRoutes;
