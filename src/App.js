import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './pages/Login';
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage />}></Route>
        <Route index path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
