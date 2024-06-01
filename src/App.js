import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Home } from './pages/Home/Home';
import { LandingPage } from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage />}></Route>
        <Route index path="/login" element={<Login />}></Route>
        <Route index path="/register" element={<Register />}></Route>
        <Route index path="/home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
