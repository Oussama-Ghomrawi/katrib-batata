import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import Categories from "./pages/Categories";
import Reports from "./pages/Reports";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";
import Addaccount from "./pages/Addaccount";
import Signout from "./pages/Signout";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Income" element={<Income />} />
          <Route path="/Expenses" element={<Expenses />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/settings/own-profile" element={<Profile />} />
          <Route path="/settings/add-account" element={<Addaccount />} />
          <Route path="/Signout" element={<Signout />}/>
          <Route path="*" element={<> not found, go eat some Shawerma</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}


export default App;
