import "./App.css";
import Homepage from "./pages/home/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/home/signin/signup";

function App() {
  return (
    <Routes>
      <Route exct path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
