import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Landing from "./landing/Landing";
import Home from "./landing/pages/Home";
import StaffExco from "./landing/pages/StaffExco";
import Projects from "./landing/pages/Projects";
import Events from "./landing/pages/Events";
import MoreInfoPage from "./landing/pages/MoreInfoPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<Landing />}>
            <Route path="/" element={<Home />} />
            <Route path="/staff-exco" element={<StaffExco />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/more-info" element={<MoreInfoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
